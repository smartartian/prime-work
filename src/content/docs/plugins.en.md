# Plugin development

An external plugin is a zip package that runs in a sandboxed iframe and talks to the host through `window.pwb`.

## Layout

```text
my-plugin/
├── .codex-plugin/
│   └── plugin.json
├── index.html
├── panel.html        # optional
├── app.js
└── style.css
```

`index.html` is the main entry. Plugins without an entry do not appear in Plugin Center.

## Minimal manifest

```json
{
  "name": "my-plugin",
  "displayName": "My Plugin",
  "version": "0.1.0",
  "description": "One line about the plugin.",
  "permissions": ["storage", "network"],
  "contributes": {
    "nav": { "title": "My Plugin", "categoryId": "nav" },
    "fetch": { "allowedOrigins": ["https://api.github.com"] }
  }
}
```

## Entry page

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

## SDK overview

| Method | Description |
| --- | --- |
| `pwb.ready()` | Tell the host the plugin is ready; required |
| `pwb.storage.get/set/remove` | Plugin-private storage, isolated per plugin |
| `pwb.settings.get/onChange` | Read settings and subscribe to changes |
| `pwb.theme.get/onChange` | Read and subscribe to theme changes |
| `pwb.fetch` | Proxied request; the origin must be allowlisted |
| `pwb.openExternal` | Open a link in the system browser |
| `pwb.ai.complete` | Call the user's configured model |
| `pwb.ssh.*` | Hosts, connections, SFTP, port forwarding and session logs (requires `ssh`) |
| `pwb.toast` | Show a lightweight toast |

## Import and debug

- **Development folder**: Settings → Plugin Center → install from a development folder; source changes take effect directly.
- **Zip package**: compress the plugin folder and import the zip.
- Browser-imported plugin source is stored in IndexedDB and survives refresh.
- Plugin errors can be inspected in the DevTools Console.

## Security and limits

- Plugins run in an iframe sandbox and cannot access the host DOM directly.
- `pwb.fetch` is limited to `contributes.fetch.allowedOrigins`.
- Declaring `desktop` permissions is rejected.
- Maximum package size is 20 MB and 2000 files.
- Plugins must call `pwb.ready()`, otherwise loading is marked as failed.

See [Plugin manifest reference](/docs/plugin-manifest) for all fields.
