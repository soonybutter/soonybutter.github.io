# StarStarSuri — Company Intro & Inquiry Web Service
## 🔨 Summary

Implemented a small-business website that provides board/inquiry features.

- **Responsive UI built with React (Vite)**

- **Nginx reverse proxy:** serves static assets and proxies /api

- **CRUD:** create/read/update/delete for posts & inquiries with paginated lists

- **React Router, Axios:** client-side routing and API communication

- **Nginx:** separated static serving from backend proxy

- **Removed front-end workarounds**

- **No CORS-related 4xx/5xx observed in production (5+ weeks)**

- **Maintained RTO ≤ 30 minutes**

## 🔨 Problem / Solution

We started this project to help a local home-repair business.
We needed to convey company information clearly and make it easy for customers to leave inquiries.

- **User-friendly UI/UX**

- **Three-layer architecture (Controller–Service–Repository):** designed board CRUD on top of it

- **Nginx reverse proxy:** operate frontend/backend separately

- **Environment separation & secret management:** prepare for deployment automation

- **Azure snapshots + scheduling:** established recovery procedures

## 🔨 Tech

- **Frontend:** React (Vite), React Router, Axios, CSS Modules (or styled-components)

- **Backend:** Java 17+, Spring Boot 3, Spring Data JPA, Spring Security, Gradle

- **DB/Infra:** MySQL, Azure VM, Nginx (Reverse Proxy)

## 👪 Team

- **Dayeon Yang (Full-stack):** board/inquiry domain & CRUD, pagination/search, frontend UI, deployment & reverse proxy

## 📎 Link

https://starstatsuri.site/

## ⚙️ Setup
```bash
# [Backend]
# 1) Clone
git clone https://github.com/soonybutter/starstarsuri_BE.git
cd starstarsuri_BE

# 2) Run
# Development
./gradlew bootRun --args="--spring.profiles.active=local"

# Production
./gradlew bootJar
java -jar build/libs/*.jar --spring.profiles.active=prod

# [Frontend]
# 1) Clone
git clone https://github.com/soonybutter/starstarsuri_FE.git
cd starstarsuri_FE

# 2) Install
npm install

# 3) Environment (.env)
# VITE_API_BASE=http://localhost:8080    # replace with service domain in production

# 4) Start dev server
npm run dev