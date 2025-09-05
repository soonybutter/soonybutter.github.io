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

import starReadme from "../readmes/starstarsuri.md?raw";
import selftopReadme from "../readmes/selftop.md?raw";
import tikkleReademe from "../readmes/tikkle.md?raw";
import portfolioReadme from "../readmes/portfolio.md?raw";

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


export const projects: Project[] = [
  {
    title: "티끌 ",
    summary: "일상 속에서 아낀 돈을 '가상 저축'하여, 특정 목표 금액 달성을 게임처럼 즐기는 서비스",
    stack: ["React , TypeScript , Spring Boot , MySQL , OAuth2 , Gradle"],
    period: "2025.07 - 2025.09",
    highlights: ["카카오/네이버/구글 OAuth ", "저축 기록 시 배지달성,", "목표달성 Progress 시각화", "배지 챌린지 및 랭킹 제공"],
    teamSize: 1, 
    myRole: "풀스택", 
    readme: tikkleReademe,
  },
  {
    title: "셀프탑 ",
    summary: "장바구니 활용을 강조한 조립식 컴퓨터 쇼핑몰 ",
    stack: ["React , Spring Boot , JQuery , Thymeleaf , MyBatis , Maven , Oracle Cloud , OracleSQL "],
    images:[
      {src: selftop00, alt: "페이지 구성", caption:"관리자 - 판매자 - 구매자 서비스 흐름도"},
      {src: selftop01, alt: "메인 페이지", caption:"메인페이지 "},
      {src: selftop02, alt: "회원가입 페이지", caption:"회원가입 페이지 "},
      {src: selftop03, alt: "제품 상세 페이지1", caption:"제품 상세페이지 1) 제품의 상세 정보를 제공"},
      {src: selftop04, alt: "제품 상세 페이지2", caption:"제품 상세페이지 2) 구매자들의 리뷰를 제공"},
      {src: selftop05, alt: "장바구니", caption:"장바구니에 담아 견적 저장하기"},
      {src: selftop06, alt: "장바구니", caption:"저장된 견적을 불러오기"},
      {src: selftop07, alt:"장바구니", caption:"상품을 담아 견적에 저장하는 과정"},
      {src: selftop08, alt:"호환성체크", caption:"각 부품의 호환성 체크기능을 제공합니다."},
      {src: selftop09, alt:"견적 페이지", caption:"생성해놓은 견적을 불러와 수정, 삭제, 호환성체크를 합니다."},
      {src: selftop10, alt:"견적 페이지", caption:"결제 페이지"},
      {src: selftop11, alt:"견적 페이지", caption:"배송상태를 확인할 수 있습니다. 배송이 시작되면 송장번호를 생성합니다."},
      {src: selftop12, alt:"견적 페이지", caption:"구매자는 주문을 취소 할 수 있습니다."},
      {src: selftop13, alt:"견적 페이지", caption:"후기를 남기거나, 이를 수정 및 삭제 역시 가능합니다."},
      {src: selftop14, alt:"견적 페이지", caption:"판매자는 자신의 재고를 이곳에서 조회하고 수정하여 관리합니다. "},
      {src: selftop15, alt:"견적 페이지", caption:"판매자의 취소요청도 이 페이지에서 관리 합니다. "},
      {src: selftop16, alt:"견적 페이지", caption:"관리자는 대표 모델을 등록할 수 있습니다. "},

    ],
    link: "https://drive.google.com/file/d/1QVjMApIgox6PezS-BDVYwUkuJaOVgL2e/view?usp=sharing&t=7",
    linkLabel: "시연영상",
    period: "2024.12 - 2025.01",
    highlights: [
      "사업자 등록번호 유효성 검사 · 주소 API 연동하여 회원가입 기능 구현 ", 
      "MyBatis활용, SQL문 분리하여 안정적으로 바인딩, 효율적으로 관리",
      "상세페이지의 상품정보와 리뷰기능을 제공, 리뷰관리 기능 구현", 
      "메인 페이지 장바구니에 상품을 담고, 견적 저장하는 기능 구현"
    ],
    teamSize: 5,
    myRole: "풀스택",
    readme: selftopReadme,
  },
  {
    title: "별별집수리 ",
    summary: "집수리 소상공인 웹 사이트 제작 ",
    link: "https://starstatsuri.site/",        
    linkLabel: "https://starstatsuri.site/",  
    linkBelowSummary: true,
    stack: ["React ,  Spring Boot ,  JPA ,  MySQL ,  CRUD구현 ,  Maven ,  Azure VM ,  Axios"],
    images:[
      {src: suri00, alt: "메인 페이지", caption:"메인 페이지 1"},
      {src: suri03, alt: "메인 페이지", caption:"메인 페이지 2"},
      {src: suri01, alt: "상세 페이지", caption:"상세 페이지 "},
      {src: suri02, alt: "게시판", caption:"문의 게시판 "},
      {src: suri04, alt: "문의 수정 및 삭제하기", caption: "문의 관리"}
    ],
    period: "2024.06 - 2024.08 + 2025.06 리팩토링",
    highlights: [
      "Controller–Service–Repository 구조로 CRUD 구성, 문의게시판 기능 구현", 
      "NginX로 리버스 프록시, 단일 도메인을 구성, CORS 문제 해결", 
      "React-Query, React-Hook-Form을 활용하여 API 요청 및 입력 폼 처리",
      "Azure 스냅샷과 애플리케이션 주기 스케줄로 롤백 가능성 확보"
    ],
    teamSize: 1,
    myRole: "풀스택",
    readme: starReadme,
  },
  {
    title: "포트폴리오 웹사이트",
    period: "2025.08 – 2025.09",
    summary: "포트폴리오 웹사이트",
    stack: [" React, Vite , TypeScript , Tailwind CSS , Lucide , Github" ],
    highlights: [
      "README 모달·우측 드로어 등 인터랙션 컴포넌트 직접 구현",
      "이미지/LCP 최적화, preconnect 및 폰트 서브셋",
      "메타/OG/파비콘/구조화 데이터로 SEO 개선",
      "반응형(모바일 퍼스트) + 다크모드(선택)",
    ],
    link: "https://soonybutter.github.io/",
    linkLabel: "https://soonybutter.github.io/",
    readme: portfolioReadme,
  },
]