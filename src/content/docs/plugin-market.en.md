# Plugin Market

The Plugin Market installs, updates and manages external plugins. Available plugins follow the market page and currently include SSH terminal, Site Navigation and Page Menu.

## Install from the market

1. Sign in to your cloud account.
2. Open **Settings → Plugin Market**.
3. Select a plugin and click Install.
4. Open **Settings → Plugin Center** and confirm the plugin is enabled.
5. For a first mount, click "Configure menu", choose a category and create the left navigation entry.

The market downloads the zip, verifies integrity and unpacks it into the local user directory. The client validates the package again; invalid packages are rejected.

## Offline import

Without an account or to pin a version:

1. Get the plugin `.zip` package.
2. Open **Settings → Plugin Center**.
3. Click "Import plugin package" and choose the zip.
4. Enable the plugin and configure its menu.

Importing the same package again overwrites the install and keeps the plugin's private storage.

## Available plugins

| Plugin | Package | Permissions | Description |
| --- | --- | --- | --- |
| SSH terminal | `ssh-terminal` | `ssh` `storage` | Terminal, SFTP, port forwarding and session logs |
| Site Navigation | `site-nav` | `storage` `network` | Grouped sites opened in the system browser |
| Page Menu | `page-menu` | `storage` `network` | External links opened in the system browser |

Exact versions and client requirements follow the market.

- [SSH terminal docs](/docs/ssh)
- [Site Navigation docs](/docs/site-nav)
- [Page Menu docs](/docs/page-menu)

## Install location

| Platform | Path |
| --- | --- |
| Windows | `%APPDATA%\Prime Work\plugins\<plugin>\` |
| macOS | `~/Library/Application Support/Prime Work/plugins/<plugin>/` |

## Update and uninstall

- When the market sees a newer version, the Install button becomes Update.
- Importing a same-name zip also upgrades and keeps private storage.
- Disabling hides the entry and keeps data.
- Uninstalling removes the plugin directory; settings and private storage are kept locally by default.

## Limits

- Browser preview can browse the market but cannot install.
- Market installs require sign-in; offline import does not.
- External plugins cannot declare `desktop` permissions.
- Market plugins run in a sandbox; embedded pages depend on the plugin.
