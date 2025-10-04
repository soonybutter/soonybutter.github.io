# 🛒 SelfTop — Cart-centric Custom PC Store
## 📌 Summary

- **An e-commerce site** that maximizes cart usage so beginners can easily create quotes and purchase custom PCs.

- **Intuitive UI/UX & compatibility checks:** guide first-time users to purchase DIY PCs

- **CRUD-focused features:** sign-up, product details, cart, purchase history, inventory/price management, product administration

-**External APIs:** Kakao login, Toss Payments, government address lookup, business registration number validation

- **PR-based change management:** WBS planning, daily meetings

- **Results:** sign-up success +15%, input errors −40%

- **Cart-to-quote conversion:** +9%

- **Zero binding errors during deployment**

- **Won the Grand Prize at the project competition**

## 🤔 Problem / Solution

We needed verifiable sign-ups/review trust and a stable path from cart to quotation.
It also had to be friendly for beginners, so we focused on a user-centric service.
Therefore, we reduced sign-up validation errors and leaks in the cart→quote flow.

- **User-friendly UI/UX:** Figma design → wireframes → screen implementation

- **Designed flows for reviews / cart / saving quotations**

- **Interceptor & MyBatis:** separated SQL and standardized binding

- **Data management:** realistic dummy data, backups, de-duplication for production-like contexts

## 🔨 Tech

- **Frontend:** HTML, CSS, jQuery, Thymeleaf, Fetch JS, AJAX

- **Backend:** Spring Boot, Java, Maven, JSON, Interceptor

- **ORM:** MyBatis

- **DB/Tools:** Oracle Cloud (Oracle DB), ERD, DBeaver

- **Co-op:** GitHub, Notion, SourceTree, Figma

- **Server/Infra:** AWS EC2

## 👪 Team

- **Me:** UI/UX design, modal components, sign-up, main cart, address & business-ID APIs, compatibility checks

- **Kim:** admin pages, Kakao login API integration, merge conflict resolution/management

- **Kwon:** initial DB design, main-page search, delivery status updates

- **Oh:** payment page, Toss Payments integration, My Page (user info) retrieval

- **Lim:** seller sales & inventory management, order detail page, compatibility checks

## 🎬 Demo

https://youtu.be/Auf2j5oB1T8?si=PANs31BGRs-qKcyZ

## ⚙️ Setup
```bash
# 1) Clone
git clone https://github.com/Dipory-Dev/SelfTop.git
cd selftop

# 2) Run (Maven)
mvn spring-boot:run

# Or build & run
mvn clean package -DskipTests
java -jar target/*.jar