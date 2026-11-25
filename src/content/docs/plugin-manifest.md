# 插件清单参考

清单文件位于 `.codex-plugin/plugin.json`，是插件安装与运行的唯一入口。

## 示例

```json
{
  "name": "hello-demo",
  "displayName": "示例插件",
  "version": "0.1.0",
  "description": "一句话描述插件功能。",
  "author": "Prime Work",
  "icon": "lucide:Puzzle",
  "category": "nav",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.16",
  "contributes": {
    "fetch": { "allowedOrigins": ["https://api.github.com"] },
    "nav": { "title": "示例插件", "categoryId": "nav" },
    "settings": [
      {
        "key": "greeting",
        "type": "text",
        "label": "问候语",
        "default": "你好！"
      }
    ]
  }
}
```

## 字段

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `name` | string | 是 | 小写字母、数字、短横线，3-64 字符，不能与内置插件重名 |
| `displayName` | string | 推荐 | 展示名，默认回退到 `name` |
| `version` | string | 是 | 语义化版本 |
| `description` | string | 推荐 | 最多 500 字 |
| `author` | string | 否 | 最多 100 字 |
| `icon` | string | 否 | Lucide 图标名，如 `lucide:Puzzle` |
| `category` | enum | 否 | `nav` / `terminal` / `ai` / `other` |
| `permissions` | array | 是 | 申请的权限列表 |
| `minAppVersion` | string | 否 | 最低兼容客户端版本 |
| `contributes.fetch.allowedOrigins` | array | fetch 必填 | 允许访问的域名白名单 |
| `contributes.nav` | object | 否 | 注册左侧导航 |
| `contributes.settings` | array | 否 | 自动渲染的配置表单 |

## 权限

| 权限 | 外部插件 | 用途 |
| --- | --- | --- |
| `storage` | 可声明 | 插件私有存储 |
| `network` | 可声明 | `pwb.fetch` / `pwb.openExternal` |
| `ai` | 可声明 | `pwb.ai.complete` |
| `ssh` | 可声明 | 主机、连接、SFTP、端口转发与会话日志（`pwb.ssh.*`） |
| `desktop` | 禁止 | 主进程能力，仅内置插件 |

权限未声明时，对应 SDK 调用会返回 `permission-denied`。

## 配置表单

`contributes.settings` 支持 `text`、`switch`、`select` 等类型，宿主会自动渲染表单。`secrets` 字段会加密保存，不会以明文返回。

## 校验规则

- zip 最大 20MB，文件数最多 2000
- 不允许绝对路径与 `../` 路径穿越
- 根目录必须存在 `.codex-plugin/plugin.json`
- `name` 不能与 `ssh`、`ai-assistant` 冲突
- 远程下载会校验 SHA-256 完整性

## 升级与卸载

升级同名插件时，宿主会先备份旧的 `data/` 与 `storage/`，保留最近 5 个快照。停用插件只隐藏入口，数据保留；卸载会删除插件目录。
