# 🛒 셀프탑 (SelfTop) — 장바구니 중심 조립식 컴퓨터 쇼핑몰

## 📌 Summary
장바구니 활용을 극대화해 초보자도 쉽게 조립 PC 견적을 만들고 구매할 수 있는 쇼핑몰입니다.  
기존 조립 사이트의 지나치게 많은 옵션·비직관성 문제를 개선하고, 구매자/판매자/관리자 역할별 화면을 분리해 가용성을 높였습니다.


- 직관적 UI/UX와 호환성 체크를 적용해 초보자도 구매할 수 있도록 했습니다.  
- CRUD 전반(회원가입, 제품 목록/상세, 장바구니/견적, 리뷰, 구매 내역, 재고·가격 관리, 제품/견적 삭제)을 구현했습니다.  
- 외부 API(카카오 로그인, 토스페이먼츠 결제, 행안부 주소 조회, 국세청 사업자등록 유효성)를 연동했습니다.  
- 협업 측면에서는 PR 기반 형상관리를 수행하고, WBS로 계획을 수립했으며, 데일리 스탠드업으로 목표를 점검했습니다.  
- “상품 정보·장바구니 견적이 우수하다”, “ORM·Interceptor 등 신입 개발자 역량을 충실히 반영했다”는 심사평을 받았습니다.

## 🤔 Background
기존 조립 PC 사이트를 사용하면서 옵션 과다·낮은 직관성을 느꼈고,  
“장바구니 중심 플로우 + 역할별 화면 분리**”로 쉽고 빠른 의사결정을 돕는 서비스를 목표로 삼았습니다.

## 🔍 Meaning
- UI/UX 전반을 Figma 설계 → 와이어프레임 → 화면 구현 순으로 진행하여 사용자 흐름을 명확히 정의했습니다.  
- Interceptor와 MyBatis 등 스프링 생태계 요소를 실사용하여 권한·인증 흐름을 구조화했습니다.  
- 실서비스 맥락에서 결제·주소·사업자검증 API를 연동하고 더미/백업/중복처리 등 데이터 관리를 수행했습니다.  
- PR·브랜치 전략과 WBS, 데일리 회의를 통해 일정과 품질을 공동 관리했습니다.

## 🔨 Technology Stack(s)
- **Frontend**: HTML, CSS, jQuery, Thymeleaf, Fetch JS, AJAX
- **Backend**: Spring Boot, Java, Maven, JSON, Interceptor
- **ORM**: MyBatis
- **DB/Tools**: Oracle Cloud(Oracle DB), ERD, DBeaver
- **Co-op**: GitHub, Notion, SourceTree, Figma
- **Server/Infra**: AWS EC2

## 👪 Members
- **본인**: UI/ UX 설계, 모달 제작, 회원가입, 메인 장바구니, 주소API·사업자 API 연동, 호환성 체크
- **김OO**: 관리자 페이지, 카카오 로그인 API 연동, 병합 충돌 해결 및 관리
- **권OO**: 초기 DB 설계, 메인페이지 검색 기능 구현, 배송 상태 업데이트 기능 구현
- **오OO**: 결제 페이지, 토스페이먼츠 API 연동, 마이페이지 회원 정보 조회
- **임OO**: 판매자 판매내역 및 재고 관리 페이지, 주문 상세 페이지, 호환성체크 구현


## ⚙️ Setup & Usage
```bash
# 1) Clone
git clone https://github.com/Dipory-Dev/SelfTop.git
cd selftop

# 2) Run (Maven)
mvn spring-boot:run

# 또는 빌드 후 실행
mvn clean package -DskipTests
java -jar target/*.jar