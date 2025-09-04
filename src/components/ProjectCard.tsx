import React, { useEffect, useRef, useState } from "react";
import {
  Github, Link as LinkIcon, Users, Laptop, ListChecks,
  Image as ImageIcon, X, ChevronLeft, ChevronRight
} from "lucide-react";
import type { Project } from "../data/projects";

function resolveImg(src?: string) {
  if (!src) return undefined;
  if (src.startsWith("/") || src.startsWith("http") || src.startsWith("data:")) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
}

export default function ProjectCard({ p }: { p: Project }) {
  const people = p.teamSize;
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const images = p.images?.length ? p.images : (p.image ? [{ src: p.image, alt: p.imageAlt }] : []);
  const hasGallery = images.length > 0;

  const go = (dir: number) => {
    if (!images.length) return;
    setIdx((i) => (i + dir + images.length) % images.length);
  };

  return (
    <>
      
      <div className="relative group rounded-2xl p-5 pb-14 bg-white/70 hover:bg-white ring-1 ring-gray-200 hover:ring-gray-300 shadow-soft transition-all duration-300 flex flex-col font-title">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-display leading-none text-[#EB4298]">
              {p.title}
            </h3>

            {/* 기간 + 팀 인원 */}
            <div className="text-xs text-gray-500 text-right space-y-1">
              {p.period && <div>{p.period}</div>}
              {typeof people === "number" && people > 0 && (
                <div className="inline-flex items-center gap-1 text-gray-600">
                  <Users size={14} /> {people}명
                </div>
              )}
            </div>
          </div>

          {/* 요약 */}
          <p className="mt-2 text-[#8029C2]">{p.summary}</p>

          {/* 하이라이트 */}
          {p.highlights && (
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          )}

          {/* 내 역할 */}
          {p.myRole && (
            <div className="mt-4">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-gray-50 text-gray-800">
                <Laptop size={14} /> {p.myRole}
              </div>
            </div>
          )}

          {/* 내가 구현한 기능 */}
          {p.contrib?.length ? (
            <div className="mt-3">
              <div className="inline-flex items-center gap-2 text-sm text-gray-700 mb-1">
                <ListChecks size={16}/> 내가 구현한 기능
              </div>
              <ul className="mt-1 text-sm text-gray-700 list-disc pl-5 space-y-1">
                {p.contrib.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          ) : null}
        </div>

        {/* 스택 */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s, i) => (
              <span
                key={`${s}-${i}`} // 중복 스택명 대비
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700 bg-gray-50"
              >
                {s}
              </span>
            ))}
          </div>

          {/*  스택 바로 아래: 깃허브/시연영상 링크들 */}
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            {p.link && (
              <a
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon size={16}/> {p.linkLabel ?? "시연영상"}
              </a>
            )}

            {p.repos?.length ? (
              p.repos.map((r) => (
                <a
                  key={r.url}
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16}/> {r.label}
                </a>
              ))
            ) : (
              p.repo && (
                <a
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16}/> Repo
                </a>
              )
            )}
          </div>
        </div>

        {/* 📷 이미지 버튼: 카드 오른쪽-하단 고정 */}
        {hasGallery && (
          <button
            type="button"
            aria-haspopup="dialog"
            aria-label="이미지 보기"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIdx(0);
              setOpen(true);
            }}
            className="
              absolute bottom-4 right-4
              inline-flex items-center gap-2.5 cursor-pointer select-none
              px-3 py-1 rounded-md
              text-sm text-gray-800 leading-none whitespace-nowrap
              bg-transparent
              transition-colors duration-200
              hover:bg-[#ff69b4] hover:text-white
              focus:outline-none focus:ring-2 focus:ring-[#ff69b4]/60 focus:ring-offset-2
            "
          >
            <ImageIcon size={16} aria-hidden="true" />
            <span className="uppercase tracking-wide">이미지</span>
          </button>
        )}
      </div>

      {/* 모달 */}
      {open && hasGallery && (
        <GalleryModal
          title={p.title}
          images={images}
          index={idx}
          onPrev={() => go(-1)}
          onNext={() => go(+1)}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

/* ────────────────────────────────────────────────────────── */
function GalleryModal({ title, images, index, onPrev, onNext, onClose }: {
  title?: string;
  images: { src: string; alt?: string; caption?: string }[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  const ANIM_MS = 200;
  const closeRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    closeRef.current?.focus();
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);

  const current = images[index];
  const resolved = resolveImg(current?.src);
  const caption = current?.caption ?? current?.alt ?? "";

  function requestClose() {
    setLeaving(true);
    setTimeout(() => onClose(), ANIM_MS);
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4
                  transition-opacity duration-200
                  ${show && !leaving ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"}`}
      role="dialog" aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) requestClose(); }}
    >
      <div
        className={`relative w-[min(92vw,1000px)] h-[min(90vh,720px)]
                    rounded-2xl bg-white shadow-2xl flex flex-col font-title
                    transition-all duration-200
                    ${show && !leaving ? "opacity-100 scale-100 translate-y-0"
                                       : "opacity-0 scale-95 translate-y-1"}`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-semibold truncate pr-8">{title}</h3>
          <button
            ref={closeRef}
            type="button"
            onClick={requestClose}
            className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
            aria-label="닫기"
            title="닫기"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 mt-2 py-[30px] text-base text-gray-700 text-center">
          <p className="line-clamp-2">{caption}</p>
        </div>

        <div className="flex-1 min-h-0 relative flex items-center justify-center px-4 py-4">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
            aria-label="이전" title="이전"
          >
            <ChevronLeft size={22} />
          </button>

          <FadingImage
            key={index}
            src={resolved}
            alt={current?.alt ?? `${title} screenshot ${index + 1}`}
          />

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100"
            aria-label="다음" title="다음"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="px-4 pb-4 text-center text-sm text-gray-700">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

function FadingImage({ src, alt }: { src?: string; alt?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <img
      src={src}
      alt={alt}
      className={`max-h-full max-w-full object-contain rounded-lg border
                  transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
      loading="eager"
    />
  );
}
