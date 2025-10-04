const fs = require("fs");
const path = require("path");

const OUT = "docs"; // ← 빌드 출력 폴더
const SRC_INDEX = path.join(OUT, "index.html");
const DEST_404 = path.join(OUT, "404.html");
const DEST_EN_DIR = path.join(OUT, "en");
const DEST_EN_INDEX = path.join(DEST_EN_DIR, "index.html");

function ensure(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

if (!fs.existsSync(OUT)) {
  console.error(`${OUT}/ 폴더가 없습니다. 먼저 \`npm run build\` 를 실행하세요.`);
  process.exit(1);
}

// 1) 404.html (index.html 복사)
try {
  fs.copyFileSync(SRC_INDEX, DEST_404);
  console.log(`[postbuild] Copied ${SRC_INDEX} -> ${DEST_404}`);
} catch (e) {
  console.warn("[postbuild] 404 복사 실패:", e.message);
}

// 2) en/index.html (정적 라우트 보장)
ensure(DEST_EN_DIR);
fs.copyFileSync(SRC_INDEX, DEST_EN_INDEX);
console.log(`[postbuild] Copied ${SRC_INDEX} -> ${DEST_EN_INDEX}`);