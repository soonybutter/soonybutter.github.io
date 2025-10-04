const fs = require("fs");
const path = require("path");

const OUT = "docs"; // ← Vite outDir
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

// 404.html (선택: 없어도 되지만 있으면 SPA fallback에 유용)
try {
  fs.copyFileSync(SRC_INDEX, DEST_404);
  console.log(`[postbuild] Copied ${SRC_INDEX} -> ${DEST_404}`);
} catch (e) {
  console.warn("[postbuild] 404 복사 실패:", e.message);
}

// en/index.html (★ 핵심)
ensure(DEST_EN_DIR);
fs.copyFileSync(SRC_INDEX, DEST_EN_INDEX);
console.log(`[postbuild] Copied ${SRC_INDEX} -> ${DEST_EN_INDEX}`);