# 💰 Tikkle — Gamified Saving Goals

## 📌 Summary

Record money you saved in daily life—like “bus instead of taxi” or “skip a coffee”—as virtual savings, and enjoy it with friends in a social, competitive way.

- **OAuth 2.0**: Kakao / Naver / Google login

- **Goal management:** name/amount/image

- **Saving logs:** enter context/amount and see progress visualized

- **Groups:** compete with friends via rankings

- **Achievements/Badges:** e.g., “skip 10 coffees” → earn a badge

- **Sign-up success:** 62% → 78%

- **LCP:** 3.4s → 2.1s (−32% initial payload)

- **Build time:** maintained at 6.07s (469 modules)

## 🤔 Problem / Solution

We wanted to help users remember and habit-form their daily savings, without heavy financial integrations.

- **Product-first design:** focus on user experience, not complex finance APIs

- **OAuth 2.0:** one-click social login minimizes friction

- **Usability-driven modeling:** clear goal/deposit domain models, error/exception response conventions

- **Operational stability:** environment separation (local/prod), secret management (.env/env vars), deployment pipeline & reverse proxy

## 🔨 Tech

- **Frontend:** React (Vite), React Router, Axios, CSS Modules, TypeScript

- **Backend:** Spring Boot, Java 17, Spring Data JPA, Spring Security (OAuth2), Gradle

- **DB/Infra:** MySQL, Azure VM (Ubuntu), Nginx (Reverse Proxy)

## 👪 Team

- **Me (Full-stack):** OAuth login, goal/saving-deposit CRUD, progress/ranking/badge UI, deployment/reverse proxy/ops

## 🌍 Web

https://mytikkle.space

## ⚙️ Setup
```bash
# [Backend]
# 1) Clone
git clone https://github.com/soonybutter/tikkle_BE.git
cd tikkle_BE

# 2) Local run (requires MySQL)
./gradlew bootRun --args="--spring.profiles.active=local"

# 3) Prod build/run (server)
./gradlew bootJar
java -jar build/libs/*.jar --spring.profiles.active=prod

# [Frontend]
# 1) Clone
git clone https://github.com/soonybutter/tikkle_FE.git
cd tikkle_FE

# 2) Install
npm install

# 3) Env (.env)
# Development
VITE_API_BASE=http://localhost:8080
VITE_SERVICE_URL=http://localhost:5173
# Production (with reverse proxy)
# VITE_API_BASE=https://mytikkle.space
# VITE_SERVICE_URL=https://mytikkle.space

# 4) Dev
npm run dev

# 5) Build & deploy (example: sync to Azure VM)
npm run build
# on the server
sudo rsync -av --delete dist/ /var/www/tikkle/