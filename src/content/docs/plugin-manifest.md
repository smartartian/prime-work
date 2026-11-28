# 插件清单参考

清单文件位于 `prime-plugin/plugin.json`（旧包可继续使用 `.codex-plugin/plugin.json`），是插件安装与运行的唯一入口。

## 示例

```json
{
  "name": "hello-demo",
  "displayName": "示例插件",
  "version": "0.2.0",
  "description": "一句话描述插件功能。",
  "author": "Prime Work",
  "repository": "https://github.com/example/hello-demo",
  "icon": "lucide:Puzzle",
  "category": "ui",
  "kind": ["feature"],
  "scope": "global",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.26",
  "contributes": {
    "nav": { "title": "示例插件", "icon": "lucide:Puzzle", "group": "nav" },
    "settings": [
      {
        "key": "greeting",
        "type": "text",
        "label": "问候语",
        "default": "你好！"
      }
    ],
    "events": { "ssh.data": "ssh.onData" },
    "commands": [{ "name": "export", "description": "导出当前插件数据" }],
    "skills": [
      {
        "id": "hello-demo:digest",
        "name": "示例摘要",
        "description": "把选中内容整理成要点。",
        "prompt": "请阅读以下内容并输出三条要点。"
      }
    ],
    "main": "main.js",
    "styles": ["style.css"],
    "sandbox": "shadow"
  }
}
```

## 字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `name` | string | 是 | 小写字母、数字、短横线，3-64 字符，不能与核心/内置插件重名 |
| `displayName` | string | 推荐 | 展示名，默认回退到 `name` |
| `version` | string | 是 | 语义化版本 |
| `description` | string | 推荐 | 最多 500 字 |
| `author` | string | 否 | 最多 100 字 |
| `repository` | string | 否 | 源码仓库地址，插件中心展示并可复制 |
| `icon` | string | 否 | Lucide 图标名，如 `lucide:Puzzle` |
| `category` | enum | 否 | 领域标签，见下方分类取值 |
| `kind` | string \| string[] | 否 | `global` / `feature` / `panel` / `tool`，支持多值 |
| `scope` | enum | 否 | `global`（默认）/ `session`，会话隔离时私有存储按会话分键 |
| `permissions` | array | 是 | 申请的权限列表 |
| `minAppVersion` | string | 否 | 最低兼容客户端版本 |
| `contributes.nav` | object \| array | 否 | 注册左侧导航或设置页菜单 |
| `contributes.settings` | array | 否 | 自动渲染的配置表单 |
| `contributes.events` | object | 否 | 声明式事件订阅：事件名 → preload 桥方法 |
| `contributes.commands` | array | 否 | 声明宿主斜杠命令 |
| `contributes.skills` | array | 否 | 声明注入 AI 的技能 |
| `contributes.main` | string | 否 | 入口 JS，默认 `main.js` |
| `contributes.styles` | string[] | 否 | 样式表，默认尝试 `style.css` |
| `contributes.sandbox` | enum | 否 | `none`（默认）/ `shadow` |
| `commands` / `skills` | array | 否 | 顶层写法，兼容早期清单 |

## 分类取值

`tool`、`integration`、`model`、`memory`、`security`、`ui`、`automation`、`remote`、`office`、`design`、`vision`、`network`、`client`、`efficiency`、`content`、`other`。

## 导航菜单字段

| 字段 | 说明 |
| --- | --- |
| `id` | 菜单唯一 id，同时作为子路由段 |
| `title` | 菜单标题，缺省使用插件名称 |
| `icon` | 菜单图标，缺省使用插件图标 |
| `group` | 主导航分组：`nav` / `terminal` / `ai` / `other`（旧字段 `categoryId` 等价） |
| `view` | 插件内视图标识，通过 mount 的 `menu.view` 传入 |
| `section` | `nav`（默认）/ `settings`，设置页菜单自动挂载 |
| `order` | 设置页菜单排序，数值越小越靠前 |
| `settingsGroup` | 设置页分组：`general` / `preference` / 自定义标题 |

## 权限

| 权限 | 外部插件 | 用途 |
| --- | --- | --- |
| `storage` | 可声明 | 插件私有存储 |
| `network` | 可声明 | `pwb.network.fetch` |
| `ai` | 可声明 | `pwb.ai.complete`、工具与模型管线 |
| `ssh` | 可声明 | 主机、连接、SFTP、端口转发与会话日志（`pwb.ssh.*`） |
| `filesystem` | 预留 | 文件能力桥尚未开放，调用会返回不可用 |
| `desktop` | 禁止 | 主进程能力，仅核心与内置插件 |

权限未声明时，对应 SDK 调用会返回 `permission-denied`。

## 配置表单

`contributes.settings` 支持 `text`、`switch`、`number`、`select`、`password`、`path` 等类型，宿主会自动渲染表单。`password` 字段会加密保存，不会以明文返回。

## 斜杠命令与技能

- `contributes.commands` 声明 `name`、`description` 与可选 `action`，宿主在 AI 输入框的「/」面板展示并路由。
- `contributes.skills` 声明技能元数据与可选的 `prompt`，启用插件后进入技能列表与模型上下文。
- 两者都支持顶层 `commands` / `skills` 字段以兼容早期清单。

## 校验规则

- zip 最大 20MB，文件数最多 2000
- 不允许绝对路径与 `../` 路径穿越
- 包根目录必须存在 `prime-plugin/plugin.json` 或 `.codex-plugin/plugin.json`
- `name` 不能与核心/内置插件冲突
- 声明 `mainSha256` 时，入口文件加载前校验完整性
- 远程下载会校验 SHA-256 完整性

## 升级与卸载

升级同名插件时，宿主会先备份旧的 `data/` 与 `storage/`，保留最近 5 个快照。停用插件只隐藏入口，数据保留；卸载会删除插件目录，插件配置与私有存储默认保留，可在「设置 → 隐私与数据 → 本地数据」中清理。
