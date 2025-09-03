import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;        
  id?: string;
  className?: string;
  once?: boolean;          
  delay?: number;        
  duration?: number;       
  y?: number;              
  threshold?: number;      
  navHeight?: number;      
};

export default function Reveal({
  children,
  as: Tag = "section",
  id,
  className = "",
  once = true,
  delay = 0,
  duration = 400,
  y = 12,
  threshold = 0.15,
  navHeight = 56,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current as Element | null;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin: `-${navHeight}px 0px 0px 0px`,
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, navHeight]);

  return (
    <Tag
      id={id}
      ref={ref as any}
      className={`will-change-[opacity,transform] ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        scrollMarginTop: `${navHeight + 8}px`,
      }}
    >
      {children}
    </Tag>
  );
}
