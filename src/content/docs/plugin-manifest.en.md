# Plugin manifest reference

The manifest lives at `prime-plugin/plugin.json` (older packages may keep `.codex-plugin/plugin.json`) and is the single entry point for installing and running a plugin.

## Example

```json
{
  "name": "hello-demo",
  "displayName": "Hello Demo",
  "version": "0.2.0",
  "description": "One line about the plugin.",
  "author": "Prime Work",
  "repository": "https://github.com/example/hello-demo",
  "icon": "lucide:Puzzle",
  "category": "ui",
  "kind": ["feature"],
  "scope": "global",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.26",
  "contributes": {
    "nav": { "title": "Hello Demo", "icon": "lucide:Puzzle", "group": "nav" },
    "settings": [
      {
        "key": "greeting",
        "type": "text",
        "label": "Greeting",
        "default": "Hello!"
      }
    ],
    "events": { "ssh.data": "ssh.onData" },
    "commands": [{ "name": "export", "description": "Export plugin data" }],
    "skills": [
      {
        "id": "hello-demo:digest",
        "name": "Digest",
        "description": "Turn the selection into key points.",
        "prompt": "Read the content and output three key points."
      }
    ],
    "main": "main.js",
    "styles": ["style.css"],
    "sandbox": "shadow"
  }
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Lowercase letters, digits and hyphens; 3-64 chars; must not clash with core or built-in plugins |
| `displayName` | string | Recommended | Display name; falls back to `name` |
| `version` | string | Yes | Semantic version |
| `description` | string | Recommended | Up to 500 chars |
| `author` | string | No | Up to 100 chars |
| `repository` | string | No | Source repository shown and copyable in Plugin Center |
| `icon` | string | No | Lucide icon, e.g. `lucide:Puzzle` |
| `category` | enum | No | Domain tag, see the list below |
| `kind` | string \| string[] | No | `global` / `feature` / `panel` / `tool`; multiple values allowed |
| `scope` | enum | No | `global` (default) / `session`; session scope isolates private storage per session |
| `permissions` | array | Yes | Requested permissions |
| `minAppVersion` | string | No | Minimum compatible client version |
| `contributes.nav` | object \| array | No | Registers left navigation or settings menus |
| `contributes.settings` | array | No | Settings form rendered by the host |
| `contributes.events` | object | No | Declarative subscriptions: event name → preload bridge method |
| `contributes.commands` | array | No | Declares host slash commands |
| `contributes.skills` | array | No | Declares skills injected into the AI assistant |
| `contributes.main` | string | No | Entry JS, defaults to `main.js` |
| `contributes.styles` | string[] | No | Stylesheets, defaults to `style.css` |
| `contributes.sandbox` | enum | No | `none` (default) / `shadow` |
| `commands` / `skills` | array | No | Top-level variants for older manifests |

## Categories

`tool`, `integration`, `model`, `memory`, `security`, `ui`, `automation`, `remote`, `office`, `design`, `vision`, `network`, `client`, `efficiency`, `content`, `other`.

## Navigation fields

| Field | Description |
| --- | --- |
| `id` | Unique menu id, also used as the sub-route |
| `title` | Menu title, defaults to the plugin name |
| `icon` | Menu icon, defaults to the plugin icon |
| `group` | Main navigation group: `nav` / `terminal` / `ai` / `other` (legacy `categoryId` is equivalent) |
| `view` | Plugin view id passed to `menu.view` on mount |
| `section` | `nav` (default) / `settings`; settings menus mount automatically |
| `order` | Sort order in Settings, lower first |
| `settingsGroup` | Settings group: `general` / `preference` / custom title |

## Permissions

| Permission | External plugins | Purpose |
| --- | --- | --- |
| `storage` | Allowed | Plugin-private storage |
| `network` | Allowed | `pwb.network.fetch` |
| `ai` | Allowed | `pwb.ai.complete`, tools and model pipeline |
| `ssh` | Allowed | Hosts, connections, SFTP, port forwarding and session logs (`pwb.ssh.*`) |
| `filesystem` | Reserved | The filesystem bridge is not open yet; calls return unavailable |
| `desktop` | Denied | Main-process capabilities; core and built-in plugins only |

Undeclared permissions return `permission-denied` for the corresponding SDK call.

## Settings form

`contributes.settings` supports `text`, `switch`, `number`, `select`, `password` and `path`. The host renders the form automatically. `password` fields are encrypted and never returned in plaintext.

## Slash commands and skills

- `contributes.commands` declares `name`, `description` and an optional `action`; the host shows them in the AI slash panel and routes the selection.
- `contributes.skills` declares skill metadata and an optional `prompt`; enabled plugins join the skill list and the model context.
- Top-level `commands` / `skills` are also accepted for older manifests.

## Validation

- Zip size ≤ 20 MB, file count ≤ 2000
- No absolute paths or `../` traversal
- `prime-plugin/plugin.json` or `.codex-plugin/plugin.json` must exist at the package root
- `name` must not conflict with core or built-in plugins
- When `mainSha256` is declared, the entry is verified before loading
- Remote downloads verify SHA-256

## Upgrade and uninstall

When upgrading the same plugin, the host snapshots the old `data/` and `storage/` and keeps the latest 5 snapshots. Disabling hides the entry and keeps data; uninstalling removes the plugin directory while settings and private storage stay locally by default and can be cleared in Settings → Privacy & Data → Local data.
