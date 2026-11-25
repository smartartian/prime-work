# Plugin manifest reference

The manifest lives at `.codex-plugin/plugin.json` and is the single entry point for installing and running a plugin.

## Example

```json
{
  "name": "hello-demo",
  "displayName": "Hello Demo",
  "version": "0.1.0",
  "description": "One line about the plugin.",
  "author": "Prime Work",
  "icon": "lucide:Puzzle",
  "category": "nav",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.16",
  "contributes": {
    "fetch": { "allowedOrigins": ["https://api.github.com"] },
    "nav": { "title": "Hello Demo", "categoryId": "nav" },
    "settings": [
      {
        "key": "greeting",
        "type": "text",
        "label": "Greeting",
        "default": "Hello!"
      }
    ]
  }
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Lowercase letters, digits and hyphens; 3-64 chars; must not clash with built-in plugins |
| `displayName` | string | Recommended | Display name; falls back to `name` |
| `version` | string | Yes | Semantic version |
| `description` | string | Recommended | Up to 500 chars |
| `author` | string | No | Up to 100 chars |
| `icon` | string | No | Lucide icon, e.g. `lucide:Puzzle` |
| `category` | enum | No | `nav` / `terminal` / `ai` / `other` |
| `permissions` | array | Yes | Requested permissions |
| `minAppVersion` | string | No | Minimum compatible client version |
| `contributes.fetch.allowedOrigins` | array | Required for fetch | Origin allowlist |
| `contributes.nav` | object | No | Registers the left navigation entry |
| `contributes.settings` | array | No | Settings form rendered by the host |

## Permissions

| Permission | External plugins | Purpose |
| --- | --- | --- |
| `storage` | Allowed | Plugin-private storage |
| `network` | Allowed | `pwb.fetch` / `pwb.openExternal` |
| `ai` | Allowed | `pwb.ai.complete` |
| `ssh` | Allowed | Hosts, connections, SFTP, port forwarding and session logs (`pwb.ssh.*`) |
| `desktop` | Denied | Main-process capabilities; built-in plugins only |

Undeclared permissions return `permission-denied` for the corresponding SDK call.

## Settings form

`contributes.settings` supports `text`, `switch`, `select` and other types. The host renders the form automatically. `secrets` fields are encrypted and never returned in plaintext.

## Validation

- Zip size ≤ 20 MB, file count ≤ 2000
- No absolute paths or `../` traversal
- `.codex-plugin/plugin.json` must exist at the package root
- `name` must not conflict with `ssh` or `ai-assistant`
- Remote downloads verify SHA-256

## Upgrade and uninstall

When upgrading the same plugin, the host snapshots the old `data/` and `storage/` and keeps the latest 5 snapshots. Disabling hides the entry and keeps data; uninstalling removes the plugin directory.
