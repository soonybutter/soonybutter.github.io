# 포트폴리오 웹 페이지 입니다. 

# 🔨기술
React + Vite + TypeScript + Tailwind CSS <br>
Lucide 아이콘, Intersection + CSS 트랜지션(리빌 애니메이션) <br>
GitHub Actions 를 통해 배포<br>

# 🚀 구현
반응형 및 이미지 최적화: cover/contain, lazy 로딩 구현 <br>
SEO 강화: title/description, Open Graph(OG), 구조화 데이터를 설정 <br>
접근성: 모달 내 키보드 내비게이션과 포커스 트랩을 적용 <br>


## Quickstart
```bash
# 1) Install deps
npm ci

# 2) Dev server
npm run dev

# 3) Build
npm run build
```

## Deploy to GitHub Pages
- Create a repo named **`portfolio`** (or change `base` in `vite.config.ts` to `/<your-repo>/`).
- Push your code to the `main` branch.
- In **Settings → Pages**, set **Source: GitHub Actions**.
- The included workflow builds and deploys `/dist` automatically on every push to `main`.
