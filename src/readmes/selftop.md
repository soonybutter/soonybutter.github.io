# 셀프탑 (SelfTop) — 장바구니 중심 조립식 컴퓨터 쇼핑몰

## 🔨 소개
장바구니 활용을 극대화해 초보자도 쉽게 조립 PC 견적을 만들고 구매할 수 있는 쇼핑몰입니다.  



- **직관적 UI/UX 와 호환성 체크:** 초보 사용자도 조립형 PC를 구매할 수 있도록 유도  
- **CRUD 기능 중점적 구현:** 회원가입, 제품 상세, 장바구니, 구매 내역, 재고·가격 관리, 제품 관리 등
- **외부 API:** 카카오 로그인, 토스페이먼츠 결제, 행안부 주소 조회, 사업자번호 조회 기능
- **PR 기반 형상관리:** WBS 계획 수립, 일간 회의 
- **가입 성공률 +15%, 입력 오류율 -40% 달성**
- **장바구니 견적 전환율 +9% 향상**
- **배포 단계 바인딩 오류 0건을 유지**
- **프로젝트 경진대회 최우수상 수상** 

## 🔨 문제 / 해결 
검증 가능한 가입·리뷰 신뢰도, 장바구니-견적 전환까지의 경로 안정화가 과제였습니다.  
또한, 초보자인 사용자도 이용하기 쉽도록 사용자 친화 서비스를 제공해야했습니다.  
따라서 가입 검증 오류와 장바구니 견적 전환 누수를 줄여야 했습니다.  

- **사용자 친화 UI/UX:** Figma 설계 → 와이어프레임 → 화면 구현 순으로 진행
- **리뷰/장바구니/견적 저장 플로우 설계**
- **Interceptor와 MyBatis:**  SQL 분리·바인딩 체계화
- **데이터 관리:** 실서비스 맥락의 더미/백업/중복처리 등 데이터 관리

## 🔨 기술
- **Frontend**: HTML, CSS, jQuery, Thymeleaf, Fetch JS, AJAX
- **Backend**: Spring Boot, Java, Maven, JSON, Interceptor
- **ORM**: MyBatis
- **DB/Tools**: Oracle Cloud(Oracle DB), ERD, DBeaver
- **Co-op**: GitHub, Notion, SourceTree, Figma
- **Server/Infra**: AWS EC2

## 👪 팀원

- **본인**: UI/ UX 설계, 모달 제작, 회원가입, 메인 장바구니, 주소API·사업자 API 연동, 호환성 체크
- **김OO**: 관리자 페이지, 카카오 로그인 API 연동, 병합 충돌 해결 및 관리
- **권OO**: 초기 DB 설계, 메인페이지 검색 기능 구현, 배송 상태 업데이트 기능 구현
- **오OO**: 결제 페이지, 토스페이먼츠 API 연동, 마이페이지 회원 정보 조회
- **임OO**: 판매자 판매내역 및 재고 관리 페이지, 주문 상세 페이지, 호환성체크 구현


## 🎬시연영상
https://youtu.be/Auf2j5oB1T8?si=PANs31BGRs-qKcyZ




## ⚙️ Setup
```bash
# 1) Clone
git clone https://github.com/Dipory-Dev/SelfTop.git
cd selftop

# 2) Run (Maven)
mvn spring-boot:run

# 또는 빌드 후 실행
mvn clean package -DskipTests
java -jar target/*.jar