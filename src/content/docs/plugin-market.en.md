# Plugin Market

The Plugin Market installs, updates and manages external plugins. Core and built-in plugins ship with the client and are not installed from the market; current external plugins include SSH Terminal, Site Navigation and Page Menu.

## Install from the market

1. Sign in to your cloud account.
2. Open **Settings → Plugin Market**.
3. Select a plugin and click Install.
4. Open **Settings → Plugin Center** and confirm the plugin is enabled.
5. Plugins that declare navigation menus create their entries automatically; only older packages without menus need manual menu configuration.

The market downloads the zip, verifies integrity and unpacks it into the local user directory. The host also verifies the entry file's SHA-256 before running it.

## Offline import

Without an account or to pin a version:

1. Get the plugin `.zip` package.
2. Open **Settings → Plugin Center**.
3. Click "Import plugin package" and choose the zip.
4. Enable the plugin; plugins with declared menus appear automatically.

Importing the same package again overwrites the install and keeps the plugin's private storage. Development copies imported from the local debug service install as `<name>-dev` and coexist with the published package.

## Available plugins

| Plugin | Package | Version | Permissions | Description |
| --- | --- | --- | --- | --- |
| SSH Terminal | `ssh-terminal` | 0.0.5 | `ssh` `storage` | Terminal, host config, SFTP, port forwarding and session logs |
| Site Navigation | `site-nav` | 0.0.5 | `storage` `network` | Grouped sites opened in the system browser |
| Page Menu | `page-menu` | 0.0.2 | `storage` `network` | External links opened in the system browser |

Exact versions and client requirements follow the market.

- [SSH terminal docs](/docs/ssh)
- [Site Navigation docs](/docs/site-nav)
- [Page Menu docs](/docs/page-menu)

## Plugin Center groups

Plugin Center groups plugins by type, with development plugins first:

- Development: source imported from the local debug service
- Global: system capabilities and config entries hosted in Settings
- Feature: plugins with their own page
- Panel: plugins that take over the right panel
- Tool: headless plugins that provide agent capabilities

Cards show the source (core / built-in / external), domain tag (tools, models, UI enhancements and more) and client requirements.

## Install location

| Platform | Path |
| --- | --- |
| Windows | `%APPDATA%\Prime Work\plugins\<plugin>\` |
| macOS | `~/Library/Application Support/Prime Work/plugins/<plugin>/` |

## Update and uninstall

- When the market sees a newer version, the Install button becomes Update.
- Importing a same-name zip also upgrades and keeps private storage.
- Disabling hides the entry and keeps data.
- Uninstalling removes the plugin directory; settings and private storage stay locally by default and can be reviewed or cleared in **Settings → Privacy & Data → Local data**.

## Limits

- Browser preview can browse the market but cannot install; use the local debug service to preview source.
- Market installs require sign-in; offline import does not.
- External plugins cannot declare `desktop` permissions.
- Market plugins mount in a Shadow DOM sandbox by default, isolated from host styles; embedded pages depend on the plugin.
