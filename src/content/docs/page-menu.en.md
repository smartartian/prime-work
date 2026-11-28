# Page Menu

Page Menu (`page-menu`) collects frequently used external pages and opens a link in the system browser.

## Install

- **Market**: Settings → Plugin Market → Page Menu → Install.
- **Offline import**: Settings → Plugin Center → Import plugin package, then choose the zip.
- Current version 0.0.2, requires client 0.0.16+; check the market for the exact requirement.
- The manifest declares a navigation menu, so the left entry appears automatically once enabled.

## Usage

1. The left column filters by category; the right side lists links.
2. Click "Add link" and fill in the name, URL and category.
3. Click "Open" next to a link to open it in the system browser.
4. Click "×" to delete a link; empty categories are hidden.

## Data and permissions

- Links and categories are stored in plugin-private storage, isolated from other plugins.
- Data stays local and does not sync with the cloud.
- Permissions: `storage`, `network`.
- It does not request `filesystem`, `ssh`, `ai` or `desktop`.
- Because of the external plugin sandbox, Page Menu **cannot embed pages in the workbench**; every link opens in the system browser.

## Update and uninstall

- Market updates or a same-name zip overwrite the install and keep link data.
- Disabling hides the entry and keeps data.
- Uninstalling removes the plugin directory; settings and private storage stay locally by default and can be cleared in Settings → Privacy & Data → Local data.

## FAQ

**Why is the Install button gray?**

Browser preview cannot install remotes; market installs also require sign-in. Use offline import, or preview source through the local debug service.

**No entry in the left navigation after install?**

Confirm the plugin is enabled in Plugin Center. The latest version declares its navigation menu and creates the entry automatically; only older packages without menu declarations need manual configuration.

**Can pages open inside the workbench?**

The external plugin version does not support embedded rendering; all links open in the system browser. Watch for a future version if you need embedding.
