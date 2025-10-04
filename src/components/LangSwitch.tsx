export default function LangSwitch() {
  // 현재 경로가 en인지 (대소문자 무시) 판단
  const isEN = /^\/en(\/|$)/i.test(window.location.pathname);
  const { pathname, search, hash } = window.location;

  // 다음 경로 계산: ko → /en, en → /
  const nextPath = (() => {
    if (isEN) {
      // /en 접두어 제거 → 최소 '/'
      const p = pathname.replace(/^\/en(?=\/|$)/i, "") || "/";
      return p;
    }
    // 항상 소문자 '/en'을 사용 (프로덕션 호환)
    return pathname === "/" ? "/en" : `/en${pathname}`;
  })();

  const href = `${nextPath}${search}${hash}`;

  return (
    <a
      href={href}
      className="text-sm text-gray-600 hover:underline"
      aria-label={isEN ? "한국어로 보기" : "See in English"}
      title={isEN ? "한국어로 보기" : "See in English"}
    >
      {/* 지금 화면이 한글이면 EN, 영어면 KO 표기 */}
      {isEN ? "KO" : "EN"}
    </a>
  );
}