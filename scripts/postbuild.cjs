const fs = require("fs");
const src = "dist/index.html";
const dest = "dist/404.html";

if (!fs.existsSync("dist")) {
  console.error("dist/ 폴더가 없습니다. 먼저 `npm run build` 를 실행하세요.");
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log(`[postbuild] Copied ${src} -> ${dest}`);