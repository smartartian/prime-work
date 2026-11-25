# Site Navigation

Site Navigation (`site-nav`) groups frequently used sites and opens a card in the system browser when clicked. It is distributed as an external plugin.

## Install

- **Market**: Settings → Plugin Market → Site Navigation → Install.
- **Offline import**: Settings → Plugin Center → Import plugin package, then choose the zip.
- Check the market for the required client version; the current runtime needs a recent client.
- After the first install, open Plugin Center and click "Configure menu" to choose a category and create the left navigation entry.

## Usage

1. Click "Add site" and fill in the name, URL and group.
2. URLs must start with `http://` or `https://`.
3. Sites appear as cards grouped by category; the color block is derived from the domain.
4. Click a card name or double-click the card to open it in the system browser.
5. Search by name or domain.
6. Hover a card and click "×" to delete it.

## Data and permissions

- Sites are stored in the plugin-private `sites` key, isolated from other plugins.
- Data stays local and does not sync with the cloud; re-enter it on another machine.
- Permissions: `storage`, `network`.
- It does not request `filesystem`, `ssh`, `ai` or `desktop`, so it cannot read local files or run commands.
- Links open in the system browser; they are not embedded in the workbench.

## Update and uninstall

- Market updates or a same-name zip overwrite the install and keep site data.
- Disabling hides the entry and keeps data.
- Uninstalling removes the plugin directory; settings and private storage are kept by default.

## FAQ

**No entry in the left navigation after install?**

A first mount needs menu configuration: Plugin Center → Site Navigation → Configure menu, choose a category and create an entry.

**`main.js` is missing?**

Older packages used `index.html`; the current host runtime expects `main.js` + `window.__primePlugin.mount`. Upgrade to the latest market version.

**Does site data sync?**

No. It is stored only in the local plugin storage.
