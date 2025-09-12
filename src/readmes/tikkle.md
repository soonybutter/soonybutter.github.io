# 💰 티끌 — 챌린지형 저축 목표 관리 앱

## 📌 Summary

“택시 대신 버스 타기”, "커피 값 아끼기" 처럼 일상에서 아낀 금액을 가상 저축으로 기록하고,

친구들과 함께 경쟁하며 SNS처럼 즐기는 서비스입니다.


- **OAuth 2.0 인증**:  카카오 / 네이버 / 구글 로그인

- **저축 목표 설정**: 목표 이름·금액·이미지

- **절약 내역 기록**: 상황·금액을 입력하면 달성률 게이지 시각화

- **그룹 참여 기능**: 친구와 랭킹 게임화

- **업적/배지 시스템**: “커피 10번 참기” 등 조건 달성 시 배지 부여

## 🤔 Background

일상 속 저축을 상기하고, 습관화 하도록 일상 친화적으로 설계했습니다.

작은 절약을 즉시 “보이는 성취”로 연결해 동기부여가 끊기지 않는 플로우를 지향합니다.

## 🔍 Meaning

제품 중심 설계: 복잡한 금융 API 없이도 사용자 심리·행동을 자극하는 핵심 가치에 집중

기술 정리: OAuth 2.0 인증 흐름, 목표/입금 도메인 모델링, 예외·에러 응답 규약, 입력 검증·페이징

운영 안정성: 환경 분리(local/prod), 시크릿(.env/환경변수), 배포/리버스 프록시 구성

## 💼 금융권 어필 포인트

최신 핀테크 트렌드인 행동경제학 + 게이미피케이션 적용으로 창의성 증명

저축 습관 유도·금융의 재미라는 은행의 장기 목표와 정합

복잡한 금융 API 없이도 사용자 중심의 제품 기획 역량을 드러냄

## 🔨 Technology Stack(s)

- **Frontend**: React(Vite), React Router, Axios, CSS Modules, Typescript

- **Backend**: Spring Boot, Java 17, Spring Data JPA, Spring Security(OAuth2), Gradle

- **DB/Infra**: MySQL, Azure VM(Ubuntu), Nginx(Reverse Proxy)


## 👪 Members

**본인(Full-stack)**: OAuth 로그인, 목표/절약입금 CRUD, 진행률·랭킹·배지 UI, 배포·리버스 프록시·운영 설정

## 🌍Link

https://mytikkle.space


## ⚙️ Setup & Usage
```bash
#[Backend]
# 1) Clone
git clone https://github.com/soonybutter/tikkle_BE.git
cd tikkle_BE

# 2) Local 실행 (MySQL 준비)
./gradlew bootRun --args="--spring.profiles.active=local"

# 3) Prod 빌드/실행 (서버)
./gradlew bootJar
java -jar build/libs/*.jar --spring.profiles.active=prod

#[Frontend]
# 1) Clone
git clone https://github.com/soonybutter/tikkle_FE.git
cd tikkle_FE

# 2) 패키지 설치
npm install

# 3) 환경 변수 (.env)
# 개발
VITE_API_BASE=http://localhost:8080
VITE_SERVICE_URL=http://localhost:5173
# 배포(프록시 운용 시 예시)
# VITE_API_BASE=https://mytikkle.space
# VITE_SERVICE_URL=https://mytikkle.space

# 4) 개발 서버
npm run dev

# 5) 빌드 & 배포(정적 파일 동기화 예시: Azure VM)
npm run build
# 서버에서
sudo rsync -av --delete dist/ /var/www/tikkle/