# Plugin development

An external plugin is a zip package. The host reads `prime-plugin/plugin.json`, loads the `main.js` entry and mounts it into a plugin container; enable Shadow DOM when isolation is required.

## Layout

```text
my-plugin/
├── prime-plugin/
│   └── plugin.json      # required; .codex-plugin/ still works for older packages
├── main.js              # entry, set by contributes.main
├── style.css            # optional, override with contributes.styles
└── data/ storage/       # optional private folders, snapshotted on upgrade
```

Plugins without a readable `main.js` do not appear in Plugin Center.

## Minimal manifest

```json
{
  "name": "my-plugin",
  "displayName": "My Plugin",
  "version": "0.1.0",
  "description": "One line about the plugin.",
  "author": "Prime Work",
  "icon": "lucide:Puzzle",
  "category": "ui",
  "kind": ["feature"],
  "scope": "global",
  "permissions": ["storage", "network"],
  "minAppVersion": "0.0.26",
  "contributes": {
    "nav": { "title": "My Plugin", "icon": "lucide:Puzzle", "group": "nav" },
    "main": "main.js",
    "styles": ["style.css"],
    "sandbox": "shadow"
  }
}
```

## Entry

The host loads and evaluates `main.js`. The mount function is exposed through `window.__primePlugin`:

```js
window.__primePlugin = {
  mount(container, { pwb, menu }) {
    container.innerHTML = "<h1>Hello Plugin</h1>";
    pwb.ready();
    return { unmount() {} };
  },
};
```

- `container` is the plugin root; with `sandbox: "shadow"` it lives inside a ShadowRoot.
- The second argument contains `pwb`, `ctx`, `menu` and bundled libraries such as xterm.
- Multi-menu plugins use `menu.view` to decide which view to render.
- Headless plugins can export `apply(ctx)` instead.
- When `mainSha256` is declared, the host verifies the entry before evaluation; local development mode skips this check.

## Multiple menus and settings entries

`contributes.nav` accepts an object or an array, so one plugin can register several menus:

```json
{
  "nav": [
    { "id": "terminal", "title": "SSH Terminal", "icon": "lucide:Server", "group": "terminal" },
    {
      "id": "host-config",
      "title": "Host Config",
      "icon": "lucide:Gauge",
      "view": "host-config",
      "section": "settings",
      "settingsGroup": "preference"
    }
  ]
}
```

- Menus with `section: "settings"` are mounted under Settings and appear as soon as the plugin is enabled.
- `settingsGroup` controls the settings group and `order` controls sorting.
- Plugins that declare `nav` get a left navigation entry automatically; manual menu configuration is only needed for older packages.

## Kinds, categories and scope

| Field | Values | Description |
| --- | --- | --- |
| `kind` | `global` / `feature` / `panel` / `tool`, array supported | User-facing plugin type; one plugin may have several |
| `category` | `tool`, `integration`, `model`, `memory`, `security`, `ui`, `automation`, `remote`, `office`, `design`, `vision`, `network`, `client`, `efficiency`, `content`, `other` | Domain tag used for filtering |
| `scope` | `global` (default) / `session` | Runtime isolation; `session` isolates private storage per AI session |

## SDK capabilities

| API | Permission | Description |
| --- | --- | --- |
| `pwb.ready()` | — | Signal that mounting is complete |
| `pwb.storage.get/set/remove` | `storage` | Plugin-private storage, isolated per plugin |
| `pwb.storage.clearSession` / `getScope` | `storage` | Clear current session keys / read the isolation scope |
| `pwb.session.id()` | — | Current AI session id, or `null` |
| `pwb.settings.get/onChange` | — | Read `contributes.settings` and subscribe to changes |
| `pwb.css.inject(text)` | — | Inject plugin styles (required in Shadow DOM mode) |
| `pwb.nav.setBadge(value)` | — | Set a badge on the current menu |
| `pwb.bus.emit/on/topics` | — | Cross-plugin event bus |
| `pwb.toast(message)` | — | Lightweight toast |
| `pwb.network.fetch` | `network` | Proxied request through the main process with an origin allowlist |
| `pwb.ai.addContext/openPanel/togglePanel` | — | Integrate with the right AI panel |
| `pwb.ai.complete/onChunk` | `ai` | Call the user's configured model |
| `pwb.llm.onRequest/onChunk` / `providers.register` | `ai` | Join the model request pipeline and register providers |
| `pwb.tools.register/list` | `ai` | Register tools for the agent |
| `pwb.agent.*` | `ai` | Tools, prompts and events for the active agent domain |
| `pwb.ssh.*` | `ssh` | Hosts, connections, SFTP, port forwarding and session logs |
| `window.primeBridge.browser.openExternal(url)` | Desktop | Open a link in the system browser |

`pwb.desktop === false` means browser preview, where main-process capabilities are unavailable.

## Local debugging

- Run `npm run plugins:serve` to start the local debug service on `127.0.0.1:9530`.
- Import local source in Plugin Center, then use "Sync changes" to pull the latest code.
- Add multiple folders by typing a path or using the system directory picker; the service also accepts `?root=<path>` / `?roots=<p1>,<p2>`.
- Set the default folder with `PLUGIN_DEV_DIR` and the port with `PLUGIN_DEV_PORT`.
- Development copies install as `<name>-dev` and coexist with the published package.
- `node_modules`, `.git`, `dist` and similar folders are ignored during the scan.

## Browser import

- Source imported in the browser is stored in OPFS first and survives refresh.
- Without the desktop bridge, `pwb.desktop` is `false` and SSH or model calls degrade.
- Browser preview is suitable for UI work; full capabilities need the desktop client.

## Security and limits

- Undeclared permissions cause the matching SDK call to be rejected; `desktop` is never granted to plugins.
- Packages may not contain absolute paths or `../` traversal.
- Maximum package size is 20 MB and 2000 files.
- The entry file can declare a SHA-256 fingerprint that the host verifies before loading.
- Shadow DOM mode isolates plugin styles and cleans them up on unmount.

See [Plugin manifest reference](/docs/plugin-manifest) for all fields.
