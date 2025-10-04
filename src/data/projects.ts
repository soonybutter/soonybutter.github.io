import selftop00 from "../assets/projects/selftop/selftop0.webp";
import selftop01 from "../assets/projects/selftop/selftop01.png";
import selftop02 from "../assets/projects/selftop/selftop02.webp";
import selftop03 from "../assets/projects/selftop/selftop03.webp";
import selftop04 from "../assets/projects/selftop/selftop04.webp";
import selftop05 from "../assets/projects/selftop/selftop05.webp";
import selftop06 from "../assets/projects/selftop/selftop06.webp";
import selftop07 from "../assets/projects/selftop/selftop07.png";
import selftop08 from "../assets/projects/selftop/selftop08.png";
import selftop09 from "../assets/projects/selftop/selftop09.png";
import selftop10 from "../assets/projects/selftop/selftop10.png";
import selftop11 from "../assets/projects/selftop/selftop11.png";
import selftop12 from "../assets/projects/selftop/selftop12.png";
import selftop13 from "../assets/projects/selftop/selftop13.png";
import selftop14 from "../assets/projects/selftop/selftop14.png";
import selftop15 from "../assets/projects/selftop/selftop15.png";
import selftop16 from "../assets/projects/selftop/selftop16.png";
import suri00 from "../assets/projects/starstarsuri/suri00.png";
import suri01 from "../assets/projects/starstarsuri/suri01.png";
import suri02 from "../assets/projects/starstarsuri/suri02.png";
import suri03 from "../assets/projects/starstarsuri/suri03.png";
import suri04 from "../assets/projects/starstarsuri/suri04.png";
import tik00 from "../assets/projects/tikkle/tik00.png";
import tik01 from "../assets/projects/tikkle/tik01.png";
import tik02 from "../assets/projects/tikkle/tik02.png";
import tik03 from "../assets/projects/tikkle/tik03.png";
import tik04 from "../assets/projects/tikkle/tik04.png";
import tik05 from "../assets/projects/tikkle/tik05.png";
import tik06 from "../assets/projects/tikkle/tik06.png";
import tik07 from "../assets/projects/tikkle/tik07.png";

// ===== KO =====
import portfolioReadmeKo from "../readmes/portfolio.md?raw";
import selftopReadmeKo   from "../readmes/selftop.md?raw";
import starReadmeKo      from "../readmes/starstarsuri.md?raw";
import tikkleReadmeKo    from "../readmes/tikkle.md?raw";

// ===== EN =====
import portfolioReadmeEn from "../readmes/portfolio.en.md?raw";
import selftopReadmeEn   from "../readmes/selftop.en.md?raw";
import starReadmeEn      from "../readmes/starstarsuri.en.md?raw";
import tikkleReadmeEn    from "../readmes/tikkle.en.md?raw";

export type RepoLink = { label: string; url: string };
export type TeamMember = { url?: string };
export type ProjectImage = { src: string; alt?: string; caption?: string; };
export type Project = {
  title: string
  summary: string
  stack: string[]
  image?: string
  link?: string      
  linkLabel?: string     
  repo?: string           
  repos?: RepoLink[]      
  period?: string
  highlights?: string[]
  teamSize?: number
  team?: TeamMember[]
  myRole?: "Full-stack" | "Front-end" | "Back-end" | string
  contrib?: string[]
  imageAlt?: string    
  images?: ProjectImage[] 
  linkBelowSummary?: boolean
  readme?: string | React.ReactNode;
}


export const projects: Record<"ko" | "en", Project[]> = {
  ko: [
    {
      title: "티끌",
      summary:
        "일상 속에서 아낀 돈을 '가상 저축'하여, 특정 목표 금액 달성을 게임처럼 즐기는 서비스",
      link: "https://mytikkle.space/",
      linkLabel: "https://mytikkle.space/",
      stack: ["React , TypeScript , Spring Boot , MySQL , OAuth2 , Gradle"],
      images: [
        { src: tik00, alt: "페이지1", caption: "인트로 페이지" },
        { src: tik01, alt: "페이지2", caption: "로그인 후 메인 페이지" },
        { src: tik02, alt: "페이지3", caption: "로그인 후 메인 페이지" },
        {
          src: tik03,
          alt: "페이지4",
          caption: "티끌 기록 상세페이지 - 저축 로그 관리 기능",
        },
        { src: tik04, alt: "페이지5", caption: "티끌 기록 목록 페이지" },
        { src: tik05, alt: "페이지6", caption: "새 목표 만들기" },
        {
          src: tik06,
          alt: "페이지7",
          caption: "배지 현황 페이지 - 달성 시 컨페티 !",
        },
        {
          src: tik07,
          alt: "페이지8",
          caption: "그룹 생성 및 초대 - 친구 초대 / 그룹 내 랭킹 제공",
        },
      ],
      period: "2025.07 - 2025.09",
      highlights: [
        "카카오·네이버·구글 OAuth 연동 - 소셜 로그인 기능 구현",
        "저축 기록 시 배지 자동 발급 - 업적 달성 기능 구현",
        "목표 달성 과정 시각화 - 진행률 게이지/효과 구현",
        "배지 챌린지·랭킹 제공 - 경쟁 기반 동기부여 기능 구현",
        "사용자 친화적 디자인 적용 - 저축 습관화 유도",
        "가입 성공률 62% → 78% 로 향상",
      ],
      teamSize: 1,
      myRole: "풀스택",
      readme: tikkleReadmeKo,
    },
    {
      title: "셀프탑",
      summary: "장바구니 활용을 강조한 조립식 컴퓨터 쇼핑몰",
      stack: [
        "React , Spring Boot , JQuery , Thymeleaf , MyBatis , Maven , Oracle Cloud , OracleSQL ",
      ],
      images: [
        {
          src: selftop00,
          alt: "페이지 구성",
          caption: "관리자 - 판매자 - 구매자 서비스 흐름도",
        },
        { src: selftop01, alt: "메인 페이지", caption: "메인페이지" },
        { src: selftop02, alt: "회원가입 페이지", caption: "회원가입 페이지" },
        {
          src: selftop03,
          alt: "제품 상세 페이지1",
          caption: "제품 상세페이지 1) 제품의 상세 정보를 제공",
        },
        {
          src: selftop04,
          alt: "제품 상세 페이지2",
          caption: "제품 상세페이지 2) 구매자들의 리뷰를 제공",
        },
        { src: selftop05, alt: "장바구니", caption: "장바구니에 담아 견적 저장하기" },
        { src: selftop06, alt: "장바구니", caption: "저장된 견적을 불러오기" },
        {
          src: selftop07,
          alt: "장바구니",
          caption: "상품을 담아 견적에 저장하는 과정",
        },
        {
          src: selftop08,
          alt: "호환성체크",
          caption: "각 부품의 호환성 체크기능을 제공합니다.",
        },
        {
          src: selftop09,
          alt: "견적 페이지",
          caption:
            "생성해놓은 견적을 불러와 수정, 삭제, 호환성체크를 합니다.",
        },
        { src: selftop10, alt: "견적 페이지", caption: "결제 페이지" },
        {
          src: selftop11,
          alt: "견적 페이지",
          caption:
            "배송상태를 확인할 수 있습니다. 배송이 시작되면 송장번호를 생성합니다.",
        },
        {
          src: selftop12,
          alt: "견적 페이지",
          caption: "구매자는 주문을 취소 할 수 있습니다.",
        },
        {
          src: selftop13,
          alt: "견적 페이지",
          caption: "후기를 남기거나, 이를 수정 및 삭제 역시 가능합니다.",
        },
        {
          src: selftop14,
          alt: "견적 페이지",
          caption: "판매자는 자신의 재고를 이곳에서 조회하고 수정하여 관리합니다.",
        },
        {
          src: selftop15,
          alt: "견적 페이지",
          caption: "판매자의 취소요청도 이 페이지에서 관리 합니다.",
        },
        {
          src: selftop16,
          alt: "견적 페이지",
          caption: "관리자는 대표 모델을 등록할 수 있습니다.",
        },
      ],
      link: "https://youtu.be/Auf2j5oB1T8?si=i_AP3UOXJ3uqICb7",
      linkLabel: "시연영상",
      period: "2024.12 - 2025.01",
      highlights: [
        "사업자 등록번호 유효성 검사 · 주소 API 연동 - 회원가입 기능 구현",
        "MyBatis 활용, SQL문 분리하여 안정적으로 바인딩 - 효율적으로 관리",
        "상세페이지의 상품정보와 리뷰기능 제공 - 리뷰관리 기능 구현",
        "메인 페이지 장바구니에 상품을 담아 - 견적 저장 기능 구현",
        "장바구니 견적 전환율 +9% 향상",
      ],
      teamSize: 5,
      myRole: "풀스택",
      readme: selftopReadmeKo,
    },
    {
      title: "별별집수리",
      summary: "집수리 소상공인 웹 사이트 제작",
      link: "https://starstatsuri.site/",
      linkLabel: "https://starstatsuri.site/",
      linkBelowSummary: true,
      stack: [
        "React ,  Spring Boot ,  JPA ,  MySQL ,  CRUD구현 ,  Maven ,  Azure VM ,  Axios",
      ],
      images: [
        { src: suri00, alt: "메인 페이지", caption: "메인 페이지 1" },
        { src: suri03, alt: "메인 페이지", caption: "메인 페이지 2" },
        { src: suri01, alt: "상세 페이지", caption: "상세 페이지" },
        { src: suri02, alt: "게시판", caption: "문의 게시판" },
        { src: suri04, alt: "문의 수정 및 삭제하기", caption: "문의 관리" },
      ],
      period: "2024.06 - 2024.08 + 2025.06 리팩토링",
      highlights: [
        "Controller–Service–Repository 구조의 CRUD 구성 - 문의게시판 기능 구현",
        "NginX 리버스 프록시로 단일 도메인 구성 - CORS 문제 해결",
        "React-Query, React-Hook-Form 활용 - API 요청 및 입력 폼 처리",
        "Azure 스냅샷과 애플리케이션 주기 스케줄 - 롤백 가능성 확보",
      ],
      teamSize: 1,
      myRole: "풀스택",
      readme: starReadmeKo,
    },
    {
      title: "포트폴리오 웹사이트",
      period: "2025.08 – 2025.09",
      summary: "포트폴리오 웹사이트",
      stack: [" React, Vite , TypeScript , Tailwind CSS , Lucide , Github"],
      highlights: [
        "README 모달·우측 드로어 등 인터랙션 컴포넌트 직접 구현",
        "이미지/LCP 최적화, preconnect 및 폰트 서브셋",
        "TTFB 420 ms → 280 ms 개선",
        "LCP 2.8s → 1.6s 개선",
      ],
      link: "https://soonybutter.github.io/",
      linkLabel: "https://soonybutter.github.io/",
      readme: portfolioReadmeKo,
    },
  ],

  en: [
    {
      title: "Tikkle",
      summary:
        "A service that turns money saved in everyday life into 'virtual savings' so you can enjoy reaching a target amount like a game.",
      link: "https://mytikkle.space/",
      linkLabel: "https://mytikkle.space/",
      stack: ["React, TypeScript, Spring Boot, MySQL, OAuth2, Gradle"],
      images: [
        { src: tik00, alt: "Intro page", caption: "Intro page" },
        { src: tik01, alt: "Main after login", caption: "Main page after login" },
        { src: tik02, alt: "Main after login", caption: "Main page after login" },
        {
          src: tik03,
          alt: "Saving log details",
          caption: "Saving log details — manage your saving logs",
        },
        { src: tik04, alt: "Saving log list", caption: "Saving log list" },
        { src: tik05, alt: "Create goal", caption: "Create a new goal" },
        { src: tik06, alt: "Badges", caption: "Badges overview — confetti on success!" },
        {
          src: tik07,
          alt: "Groups & invites",
          caption: "Create/invite groups — friend invites & in-group ranking",
        },
      ],
      period: "2025.07 – 2025.09",
      highlights: [
        "Social login via Kakao/Naver/Google OAuth",
        "Auto-issue badges on saving logs — achievements system",
        "Visualized progress to the target — progress gauge/effects",
        "Badge challenges & ranking — competition-driven motivation",
        "UX first design to build savings habits",
        "Sign-up success improved 62% → 78%",
      ],
      teamSize: 1,
      myRole: "Full-stack",
      readme: tikkleReadmeEn,
    },
    {
      title: "SelfTop",
      summary:
        "A custom PC e-commerce site that emphasizes the use of a cart for quotations.",
      stack: [
        "React, Spring Boot, jQuery, Thymeleaf, MyBatis, Maven, Oracle Cloud, Oracle SQL",
      ],
      images: [
        {
          src: selftop00,
          alt: "Service flow",
          caption: "Admin – Seller – Buyer service flow",
        },
        { src: selftop01, alt: "Home", caption: "Home" },
        { src: selftop02, alt: "Sign-up", caption: "Sign-up" },
        {
          src: selftop03,
          alt: "Product details 1",
          caption: "Product details (1): detailed specs",
        },
        {
          src: selftop04,
          alt: "Product details 2",
          caption: "Product details (2): buyer reviews",
        },
        {
          src: selftop05,
          alt: "Cart",
          caption: "Add to cart and save as a quotation",
        },
        { src: selftop06, alt: "Cart", caption: "Load saved quotations" },
        {
          src: selftop07,
          alt: "Cart",
          caption: "Add products and save as a quotation",
        },
        {
          src: selftop08,
          alt: "Compatibility check",
          caption: "Compatibility checks between parts",
        },
        {
          src: selftop09,
          alt: "Quotation page",
          caption: "Load/edit/delete/compatibility-check your saved quotations",
        },
        { src: selftop10, alt: "Payment page", caption: "Payment page" },
        {
          src: selftop11,
          alt: "Delivery status",
          caption:
            "Track delivery status; a tracking number is issued when shipping starts",
        },
        {
          src: selftop12,
          alt: "Cancel order",
          caption: "Buyer can cancel orders",
        },
        {
          src: selftop13,
          alt: "Reviews",
          caption: "Leave, edit, and delete reviews",
        },
        {
          src: selftop14,
          alt: "Inventory management",
          caption: "Sellers manage inventory here",
        },
        {
          src: selftop15,
          alt: "Cancellation management",
          caption: "Sellers handle cancel requests here",
        },
        {
          src: selftop16,
          alt: "Featured models",
          caption: "Admins can register featured models",
        },
      ],
      link: "https://youtu.be/Auf2j5oB1T8?si=i_AP3UOXJ3uqICb7",
      linkLabel: "Demo video",
      period: "2024.12 – 2025.01",
      highlights: [
        "Business registration validation & address API — robust sign-up",
        "MyBatis with separated SQL binds for maintainability",
        "Product details + reviews — full review management",
        "Add to cart on home — save as quotation",
        "Quotation conversion rate +9%",
      ],
      teamSize: 5,
      myRole: "Full-stack",
      readme: selftopReadmeEn,
    },
    {
      title: "Starstar Home Repair",
      summary: "A website for a local home-repair small business.",
      link: "https://starstatsuri.site/",
      linkLabel: "https://starstatsuri.site/",
      linkBelowSummary: true,
      stack: [
        "React, Spring Boot, JPA, MySQL, CRUD, Maven, Azure VM, Axios",
      ],
      images: [
        { src: suri00, alt: "Home", caption: "Home (1)" },
        { src: suri03, alt: "Home", caption: "Home (2)" },
        { src: suri01, alt: "Details", caption: "Details" },
        { src: suri02, alt: "Board", caption: "Q&A board" },
        { src: suri04, alt: "Manage inquiry", caption: "Manage inquiries" },
      ],
      period: "2024.06 – 2024.08 + refactor in 2025.06",
      highlights: [
        "CRUD with Controller–Service–Repository — Q&A board implemented",
        "Single domain via Nginx reverse proxy — resolved CORS issues",
        "React Query + React Hook Form — API requests and forms",
        "Azure snapshots + app lifecycle schedule — safe rollback ready",
      ],
      teamSize: 1,
      myRole: "Full-stack",
      readme: starReadmeEn,
    },
    {
      title: "Portfolio Website",
      period: "2025.08 – 2025.09",
      summary: "My portfolio website.",
      stack: ["React, Vite, TypeScript, Tailwind CSS, Lucide, GitHub"],
      highlights: [
        "Custom interactions like README modal & right drawer",
        "Image/LCP optimization, preconnect, font subsetting",
        "TTFB improved 420 ms → 280 ms",
        "LCP improved 2.8s → 1.6s",
      ],
      link: "https://soonybutter.github.io/",
      linkLabel: "https://soonybutter.github.io/",
      readme: portfolioReadmeEn,
    },
  ],
};
