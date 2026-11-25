# 插件开发

Prime Work 的外部插件是一个 zip 包，运行在沙箱 iframe 中，通过 `window.pwb` 与宿主通信。

## 目录结构

```text
my-plugin/
├── .codex-plugin/
│   └── plugin.json
├── index.html
├── panel.html        # 可选
├── app.js
└── style.css
```

`index.html` 是主页面入口；没有入口文件的插件不会出现在插件中心。

## 最小清单

```json
{
  "name": "my-plugin",
  "displayName": "我的插件",
  "version": "0.1.0",
  "description": "一句话描述插件功能。",
  "permissions": ["storage", "network"],
  "contributes": {
    "nav": { "title": "我的插件", "categoryId": "nav" },
    "fetch": { "allowedOrigins": ["https://api.github.com"] }
  }
}
```

## 入口页面

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hello Plugin</h1>
    <script>
      async function boot() {
        if (!window.pwb) await new Promise((r) => setTimeout(r, 300));
        pwb.ready();
        const res = await pwb.fetch("https://api.github.com/zen");
        document.body.append(res.ok ? res.body : res.error);
      }
      boot();
    </script>
  </body>
</html>
```

## SDK 常用能力

| 方法 | 说明 |
| --- | --- |
| `pwb.ready()` | 通知宿主插件已就绪，必须调用 |
| `pwb.storage.get/set/remove` | 插件私有存储，按插件名隔离 |
| `pwb.settings.get/onChange` | 读取配置表单与订阅变化 |
| `pwb.theme.get/onChange` | 读取与订阅主题 |
| `pwb.fetch` | 经主进程代理请求，需在白名单内 |
| `pwb.openExternal` | 用系统浏览器打开链接 |
| `pwb.ai.complete` | 调用用户已配置的模型 |
| `pwb.ssh.*` | 主机、连接、SFTP、端口转发与会话日志（需 `ssh` 权限） |
| `pwb.toast` | 显示轻提示 |

## 导入与调试

- **开发目录**：设置 → 插件中心 → 从开发目录安装，修改源码后可直接生效。
- **zip 包**：把插件目录压缩为 zip 后导入。
- 浏览器端导入的插件源码保存在 IndexedDB，刷新后仍然存在。
- 插件内错误可在 DevTools Console 查看。

## 安全与限制

- 插件运行在 iframe 沙箱中，不能直接访问宿主 DOM。
- `pwb.fetch` 只能访问 `contributes.fetch.allowedOrigins` 中的域名。
- 声明 `desktop` 权限会被拒绝。
- 单包上限 20MB、最多 2000 个文件。
- 插件必须调用 `pwb.ready()`，否则会被判定为加载失败。

完整字段见 [插件清单参考](/docs/plugin-manifest)。
