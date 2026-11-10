# Prime Work 官网

Prime Work 的产品官网，独立于主应用仓库。React 18 + Vite + TypeScript，中英双语，部署在 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build     # 类型检查 + 构建到 dist/
npm run preview   # 本地预览构建产物
```

## 部署

推送到 `main` 分支后由 GitHub Actions 自动构建并发布到 GitHub Pages，访问路径为 `/prime-work/`。

首次使用需要在仓库 Settings → Pages 中将 Source 设为「GitHub Actions」。

## 内容维护

- 中英文案：`src/i18n/zh.ts`、`src/i18n/en.ts`，两者结构必须一致（由 `Dictionary` 类型约束）
- 版本号与更新日志：`src/i18n/*.ts` 的 `release` 段
- 页面结构：`src/App.tsx` 与 `src/components/`
- 样式与设计变量：`src/styles.css` 顶部 `:root`

下载通道开放后，在 `Release` 区块补充下载按钮，并同步隐藏 `status` 的「即将开放」文案。
