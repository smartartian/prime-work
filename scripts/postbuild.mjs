import { copyFileSync, existsSync } from "node:fs";

// GitHub Pages 的 SPA 回退：把首页复制为 404.html，
// 直接访问 /release、/docs 等子路径时由前端路由接管。
if (existsSync("dist/index.html")) {
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("postbuild: dist/404.html created");
}
