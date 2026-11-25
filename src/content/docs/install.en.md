# Install and update

## Requirements

| Platform | Build |
| --- | --- |
| macOS | Apple Silicon (arm64) |
| Windows | Windows 10 / 11 x64 |

## Install

1. Get the installer for your platform from the release channel.
2. macOS: open the `.dmg` and drag Prime Work into Applications.
3. Windows: run the `.exe` installer and follow the prompts.
4. First launch:
   - macOS: if the developer cannot be verified, allow it in System Settings → Privacy & Security.
   - Windows: if SmartScreen appears, choose More info → Run anyway.

> Download channels and available builds follow the release page.

## Auto update

Desktop checks for updates on startup. In **Settings → About** you can view the current version, check manually, toggle auto-update, and restart to install.

The web build shows the current version only; updates are handled by the desktop app.

## Data locations

| Platform | Path |
| --- | --- |
| macOS | `~/Library/Application Support/Prime Work/` |
| Windows | `%APPDATA%\Prime Work\` |

After signing in, menus, plugin states, hosts and AI sessions sync to the cloud; plugin packages, caches and logs stay local.

## Uninstall

- macOS: delete Prime Work from Applications.
- Windows: uninstall from Settings → Apps.
- To remove all data, quit the app and delete the data directory above.
