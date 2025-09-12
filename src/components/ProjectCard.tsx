import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Github,
  Link as LinkIcon,
  Users,
  Laptop,
  ListChecks,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  Book,
  ArrowRight,
} from "lucide-react";
import type { Project } from "../data/projects";


/* ---------------------- helpers ---------------------- */
function resolveImg(src?: string) {
  if (!src) return undefined;
  if (src.startsWith("/") || src.startsWith("http") || src.startsWith("data:")) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
}

/* ---------------------- main card ---------------------- */
export default function ProjectCard({ p }: { p: Project }) {
  const people = p.teamSize;
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const [openReadme, setOpenReadme] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const images = p.images?.length
    ? p.images
    : p.image
    ? [{ src: p.image, alt: p.imageAlt }]
    : [];
  const hasGallery = images.length > 0;

  const go = (dir: number) => {
    if (!images.length) return;
    setGalleryIdx((i) => (i + dir + images.length) % images.length);
  };

  return (
    <>
      <div className="relative group rounded-2xl p-5 pb-16 bg-white/70 hover:bg-white ring-1 ring-gray-200 hover:ring-gray-300 shadow-soft transition-all duration-300 flex flex-col font-title">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-display leading-none text-[#db3281]">{p.title}</h3>

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
          {p.summary && <p className="mt-2 text-[#8029C2]">{p.summary}</p>}

          {/* 하이라이트 */}
          {p.highlights && (
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5 space-y-1">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
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
                <ListChecks size={16} /> 내가 구현한 기능
              </div>
              <ul className="mt-1 text-sm text-gray-700 list-disc pl-5 space-y-1">
                {p.contrib.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {/* 스택 */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700 bg-gray-50"
              >
                {s}
              </span>
            ))}
          </div>

          {/* 깃허브/시연영상 링크들 */}
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            {p.link && (
              <a className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline" href={p.link} target="_blank" rel="noreferrer">
                <LinkIcon size={16} /> {p.linkLabel ?? "시연영상"}
              </a>
            )}

            {p.repos?.length ? (
              p.repos.map((r) => (
                <a key={r.url} className="inline-flex items-center gap-1 text-sm hover:underline" href={r.url} target="_blank" rel="noreferrer">
                  <Github size={16} /> {r.label}
                </a>
              ))
            ) : p.repo ? (
              <a className="inline-flex items-center gap-1 text-sm hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                <Github size={16} /> Repo
              </a>
            ) : null}
          </div>
        </div>

        {/* 하단 우측 버튼들 */}
        <div
          className="
            absolute bottom-4 right-4
            flex items-center gap-2
          "
        >
          {hasGallery && (
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label="이미지 보기"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGalleryIdx(0);
                setOpenGallery(true);
              }}
              className="inline-flex items-center gap-2.5 cursor-pointer select-none
                         px-3 py-1 rounded-md text-sm text-gray-800
                         bg-transparent hover:bg-[#ff69b4] hover:text-white
                         focus:outline-none focus:ring-2 focus:ring-[#ff69b4]/60 focus:ring-offset-2"
            >
              <ImageIcon size={16} aria-hidden="true" />
              <span className="uppercase tracking-wide">이미지</span>
            </button>
          )}

        {/* README 버튼: readme가 있을 때만 노출 */}
          {(p as any).readme && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenReadme(true);
              }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md text-sm
                        text-gray-800 bg-transparent hover:bg-indigo-500 hover:text-white
                        focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2"
            >
              <Book size={16} />
              <span className="tracking-wide">README</span>
            </button>
          )}
          
        </div>
      </div>

      {/* 갤러리 모달 */}
      {openGallery && hasGallery && (
        <GalleryModal
          title={p.title}
          images={images}
          index={galleryIdx}
          onPrev={() => go(-1)}
          onNext={() => go(+1)}
          onClose={() => setOpenGallery(false)}
        />
      )}

      {/* README 모달 */}
      {openReadme && (
        <ReadmeModal
          title={p.title}
          readme={(p as any).readme}
          onClose={() => setOpenReadme(false)}
        />
      )}

      
    </>
  );
}

/* ───────────────────────── Gallery Modal ───────────────────────── */
function GalleryModal({
  title,
  images,
  index,
  onPrev,
  onNext,
  onClose,
}: {
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
    <Portal>
      <div
        className={`fixed inset-0 z-[110] flex items-start justify-center p-4
                    transition-opacity duration-200 ${
          show && !leaving ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
        } overflow-y-auto`}  
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) requestClose();
        }}
      >
        <div
          className={`relative w-[min(88vw,900px)] h-[min(92vh,780px)]
                      rounded-2xl bg-white shadow-2xl flex flex-col font-title
                      transition-all duration-200 ${
            show && !leaving ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-1"
          }`}
        >
          {/* 상단바: 검정 배경 + 흰 글씨 (README 모달과 동일) */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-black text-white rounded-t-2xl">
            <h3 className="text-lg font-semibold truncate pr-8">{title}</h3>
            <button
              ref={closeRef}
              type="button"
              onClick={requestClose}
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10"
              aria-label="닫기"
              title="닫기"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* 캡션 */}
          <div className="px-5 mt-2 py-[18px] text-base text-gray-700 text-center">
            <p className="line-clamp-2">{caption}</p>
          </div>

          {/* 이미지 영역 */}
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

          {/* 인디케이터 */}
          <div className="px-4 pb-4 text-center text-sm text-gray-700">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>
    </Portal>
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
      className={`max-h-full max-w-full object-contain rounded-lg border transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
      loading="eager"
    />
  );
}

/* ───────────────────────── README Modal ───────────────────────── */
function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current && typeof document !== "undefined") {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("data-portal", "modal");
  }
  useEffect(() => {
    const el = elRef.current!;
    document.body.appendChild(el);
    setMounted(true);
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  if (!mounted || !elRef.current) return null;
  return createPortal(children, elRef.current);
}

function ReadmeModal({
  title,
  readme,
  onClose,
}: {
  title?: string;
  readme: string | React.ReactNode;
  onClose: () => void;
}) {
  const ANIM_MS = 150;
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // 애니메이션 시작
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // ESC 닫기
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // 배경 스크롤 잠금(레이아웃 점프 방지 포함)
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarW > 0) document.body.style.paddingRight = `${scrollbarW}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, []);


  function requestClose() {
    setLeaving(true);
    setTimeout(() => onClose(), ANIM_MS);
  }


  type CodePropsLike = React.HTMLAttributes<HTMLElement> & {
  inline?: boolean;
  className?: string;
};

  const CodeRenderer: React.FC<{ inline?: boolean; className?: string } & React.HTMLAttributes<HTMLElement>> = ({ inline, className, children, ...rest }) => {
    if (inline) {
      return (
        <code className="px-1 py-0.5 rounded bg-gray-100 text-gray-900 font-mono" {...rest}>
          {children}
        </code>
      );
    }
    return (
      <pre className="p-3 rounded bg-gray-100 overflow-auto">
        <code className={`text-gray-900 font-mono ${className ?? ""}`} {...rest}>
          {children}
        </code>
      </pre>
    );
  };

  const mdComponents: Components = {
    h1: (p) => <h1 className="mt-6 mb-3 text-2xl font-extrabold text-gray-900 font-readme" {...p} />,
    h2: (p) => <h2 className="mt-5 mb-2 text-xl font-bold text-gray-900 font-readme" {...p} />,
    h3: (p) => <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-900 font-readme" {...p} />,
    p:  (p) => <p  className="my-2 text-[15px] leading-relaxed text-gray-800 font-readme font-medium" {...p} />,
    ul: (p) => <ul className="my-2 list-disc pl-5 space-y-1 text-gray-800 font-readme" {...p} />,
    ol: (p) => <ol className="my-2 list-decimal pl-5 space-y-1 text-gray-800 font-readme" {...p} />,
    li: (p) => <li className="leading-relaxed" {...p} />,
    a:  (p) => <a className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noreferrer" {...p} />,
    code: CodeRenderer,
  };

  return (
  <Portal>
    <div
      className={`fixed inset-0 z-[110] flex items-start justify-center p-4 transition-opacity duration-150 ${
        show && !leaving ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
      } overflow-y-auto`}
      role="dialog"
      aria-modal="true"
      aria-label="README modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
    >
      <div
        className={`relative w-[min(88vw,720px)] rounded-2xl
                    bg-black text-white shadow-2xl flex flex-col
                    transition-all duration-150 font-title ${
          show && !leaving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
      
        {/* Readme 모달 헤더 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-black text-white rounded-t-2xl">
          <h3 className="text-lg font-semibold truncate pr-12">README.md</h3>
          <button
            type="button"
            onClick={requestClose}
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10"
            aria-label="닫기"
            title="닫기"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* 본문: 흰 배경 + 검정 글씨 + 내부 스크롤 */}
        <div className="flex-1 min-h-0 overflow-auto px-5 py-4 bg-white text-gray-900">
          
          {/* 본문 최상단 제목 밑줄 */}
          <div className="mb-4 pb-2 border-b border-gray-300 text-sm opacity-90">
            {title}
          </div>

          {typeof readme === "string" ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {readme}
            </ReactMarkdown>
          ) : (

            <div className="text-[15px] leading-relaxed font-readme font-medium">
              {readme}
            </div>

          )}
        </div>

      </div>
    </div>
  </Portal>
  );
}


