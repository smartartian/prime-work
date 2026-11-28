# 插件开发

Prime Work 的外部插件是一个 zip 包。宿主读取 `prime-plugin/plugin.json`，加载入口 `main.js` 并挂载到插件容器；需要隔离时可开启 Shadow DOM。

## 目录结构

```text
my-plugin/
├── prime-plugin/
│   └── plugin.json      # 必填，旧包可继续用 .codex-plugin/
├── main.js              # 入口，由 contributes.main 指定
├── style.css            # 可选，contributes.styles 可覆盖
└── data/ storage/       # 可选，插件私有目录，升级时自动快照
```

`main.js` 缺失或无法读取时，插件不会出现在插件中心。

## 最小清单

```json
{
  "name": "my-plugin",
  "displayName": "我的插件",
  "version": "0.1.0",
  "description": "一句话描述插件功能。",
  "author": "Prime Work",
  "icon": "lucide:Puzzle",
  "category": "ui",
  "kind": ["feature"],
  "scope": "global",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.26",
  "contributes": {
    "nav": { "title": "我的插件", "icon": "lucide:Puzzle", "group": "nav" },
    "main": "main.js",
    "styles": ["style.css"],
    "sandbox": "shadow"
  }
}
```

## 入口

`main.js` 由宿主加载并执行，挂载函数通过 `window.__primePlugin` 暴露：

```js
window.__primePlugin = {
  mount(container, { pwb, menu }) {
    container.innerHTML = "<h1>Hello Plugin</h1>";
    pwb.ready();
    return { unmount() {} };
  },
};
```

- `container` 是插件根节点；`sandbox: "shadow"` 时位于 ShadowRoot 内。
- 第二个参数包含 `pwb`、`ctx`、`menu` 与宿主内置的第三方库（如 xterm）。
- 多菜单插件用 `menu.view` 判断当前应渲染哪个视图。
- 无界面的能力插件可以改为导出 `apply(ctx)`。
- 清单声明 `mainSha256` 时，宿主会在执行前校验入口完整性；本地开发模式自动跳过。

## 多菜单与设置页入口

`contributes.nav` 支持对象或数组，一个插件可以注册多个菜单：

```json
{
  "nav": [
    { "id": "terminal", "title": "SSH 终端", "icon": "lucide:Server", "group": "terminal" },
    {
      "id": "host-config",
      "title": "主机配置",
      "icon": "lucide:Gauge",
      "view": "host-config",
      "section": "settings",
      "settingsGroup": "preference"
    }
  ]
}
```

- 声明 `section: "settings"` 的菜单会挂载到设置页二级菜单，启用插件后自动出现，无需手动配置。
- `settingsGroup` 控制设置页分组，`order` 控制排序。
- 声明了 `nav` 的插件启用后自动创建左侧导航入口；只有旧包或未声明菜单时才需要手动配置。

## 类型、领域标签与作用域

| 字段 | 取值 | 说明 |
| --- | --- | --- |
| `kind` | `global` / `feature` / `panel` / `tool`，支持数组 | 用户视角的插件类型，一个插件可同时具备多种 |
| `category` | `tool`、`integration`、`model`、`memory`、`security`、`ui`、`automation`、`remote`、`office`、`design`、`vision`、`network`、`client`、`efficiency`、`content`、`other` | 插件领域标签，用于分类筛选 |
| `scope` | `global`（默认）/ `session` | 运行时隔离范围；`session` 下私有存储按 AI 会话自动隔离 |

## SDK 能力

| 接口 | 所需权限 | 说明 |
| --- | --- | --- |
| `pwb.ready()` | 无 | 通知宿主挂载完成，建议调用 |
| `pwb.storage.get/set/remove` | `storage` | 插件私有存储，按插件隔离 |
| `pwb.storage.clearSession` / `getScope` | `storage` | 清理当前会话键 / 查询隔离范围 |
| `pwb.session.id()` | 无 | 当前 AI 会话 id，无会话时返回 `null` |
| `pwb.settings.get/onChange` | 无 | 读取 `contributes.settings` 并订阅变化 |
| `pwb.css.inject(text)` | 无 | 注入插件样式（Shadow DOM 模式下必须使用） |
| `pwb.nav.setBadge(value)` | 无 | 设置当前菜单徽标 |
| `pwb.bus.emit/on/topics` | 无 | 跨插件事件总线 |
| `pwb.toast(message)` | 无 | 轻提示 |
| `pwb.network.fetch` | `network` | 经主进程代理请求，受域名白名单限制 |
| `pwb.ai.addContext/openPanel/togglePanel` | 无 | 与右侧 AI 面板联动 |
| `pwb.ai.complete/onChunk` | `ai` | 调用用户已配置的模型 |
| `pwb.llm.onRequest/onChunk` / `providers.register` | `ai` | 参与模型请求管线与供应商预置 |
| `pwb.tools.register/list` | `ai` | 向 Agent 注册工具 |
| `pwb.agent.*` | `ai` | 当前 Agent 域内的工具、提示词与事件 |
| `pwb.ssh.*` | `ssh` | 主机、连接、SFTP、端口转发与会话日志 |
| `window.primeBridge.browser.openExternal(url)` | 桌面端 | 用系统浏览器打开外链 |

`pwb.desktop` 为 `false` 表示当前是浏览器预览，主进程能力不可用。

## 本地调试

- 运行 `npm run plugins:serve` 启动本地调试服务，默认监听 `127.0.0.1:9530`。
- 在插件中心导入本地源码后，可用「同步修改」重新拉取最新代码。
- 支持在弹窗内直接输入路径或用系统目录选择器添加多个目录；服务端也接受 `?root=<path>` / `?roots=<p1>,<p2>` 参数。
- 默认目录可用 `PLUGIN_DEV_DIR` 指定，端口用 `PLUGIN_DEV_PORT` 调整。
- 开发副本以 `<name>-dev` 安装，与正式安装包并存，卸载互不影响。
- 扫描会忽略 `node_modules`、`.git`、`dist` 等目录。

## 浏览器端导入

- 浏览器端导入的插件源码优先保存在 OPFS，刷新后仍然存在。
- 没有桌面桥时 `pwb.desktop` 为 `false`，SSH、模型调用等能力自动降级。
- 浏览器预览适合调试界面与交互，完整能力需要桌面客户端。

## 安全与限制

- 权限未声明时，对应 SDK 调用会被拒绝；`desktop` 权限不对插件开放。
- 插件包不允许绝对路径与 `../` 路径穿越。
- 单包上限 20MB、最多 2000 个文件。
- 入口文件可声明 SHA-256 指纹，宿主在加载前校验。
- Shadow DOM 模式下插件样式与宿主隔离，卸载时统一清理。

完整字段见 [插件清单参考](/docs/plugin-manifest)。
