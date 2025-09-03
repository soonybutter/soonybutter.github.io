import React, { useEffect, useState } from "react";

type Props = {
  lines: string[];      // 줄 단위 텍스트 (줄바꿈 대신)
  speed?: number;       // 글자당(ms)
  lineDelay?: number;   // 줄 전환 지연(ms)
  startDelay?: number;  // 시작 지연(ms)
  loop?: boolean;       // 반복 여부
  className?: string;   // 추가 스타일
  cursor?: boolean;     // 커서 표시
  gap?: number;
};

export default function Typewriter({
  lines,
  speed = 60,
  lineDelay = 600,
  startDelay = 0,
  loop = false,
  className = "",
  gap = 0,
  cursor = true,
}: Props) {
  const [ready, setReady] = useState(false); // 현재 라인 인덱스
  const [lineIdx, setLineIdx] = useState(0); // 현재 라인의 타이핑 위치
  const [charIdx, setCharIdx] = useState(0); // 완료된 라인들

  // 시작 지연
  useEffect(() => {
    const id = setTimeout(() => setReady(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay]);

  // 타이핑 진행
  useEffect(() => {
    if (!ready) return;
    const current = lines[lineIdx] ?? "";

    if (charIdx <= current.length) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(id);
    }

    // 한 줄 완료 → 다음 줄
    if (lineIdx < lines.length - 1) {
      const id = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, lineDelay);
      return () => clearTimeout(id);
    }

    // 전체 완료 후 루프
    if (loop) {
      const id = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 1500);
      return () => clearTimeout(id);
    }
  }, [ready, lineIdx, charIdx, lines, speed, lineDelay, loop]);

  // 렌더링할 줄들 (완료된 줄 + 현재 줄 일부)
  const rendered: string[] = [];
  for (let i = 0; i < lineIdx; i++) rendered.push(lines[i]);
  const current = lines[lineIdx] ?? "";
  rendered.push(current.slice(0, Math.min(charIdx, current.length)));

  const done =
    !loop &&
    lineIdx === lines.length - 1 &&
    charIdx >= (lines[lineIdx] || "").length;

  return (
    <span className={`whitespace-pre-wrap ${className}`}
    style={{ rowGap: gap }}
    >
        
      {rendered.map((l, i) => (
        <React.Fragment key={i}>
          {l}
          {i < rendered.length - 1 && <br />}
        </React.Fragment>
      ))}
      {cursor && !done && <span className="tw-caret" aria-hidden="true" />}
    </span>
  );
}
