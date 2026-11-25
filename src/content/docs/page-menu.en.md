# Page Menu

Page Menu (`page-menu`) collects frequently used external pages and opens a link in the system browser.

## Install

- **Market**: Settings → Plugin Market → Page Menu → Install.
- **Offline import**: Settings → Plugin Center → Import plugin package, then choose the zip.
- Check the market for the required client version.
- After the first install, open Plugin Center and click "Configure menu" to choose a category and create the left navigation entry.

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
- Uninstalling removes the plugin directory; settings and private storage are kept by default.

## FAQ

**Why is the Install button gray?**

Browser preview cannot install remotes; market installs also require sign-in. Use offline import instead.

**No entry in the left navigation after install?**

Open Plugin Center, click "Configure menu", choose a category and create the entry.

**Can pages open inside the workbench?**

The external plugin version does not support embedded rendering; all links open in the system browser. Watch for a future version if you need embedding.
