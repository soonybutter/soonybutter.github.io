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

## 🔨 Problem / Solution

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

