# FAQ

## Where is my data stored?

Desktop data lives in the app data directory. After signing in, menus, plugin states, hosts and AI sessions sync to the cloud. Credentials are encrypted and never returned in plaintext.

## Does it work in a browser?

You can preview the interface and read docs and release notes. The SSH terminal, SFTP, port forwarding and command execution require the desktop client.

## Is Windows supported?

Windows 10/11 x64 and macOS (Apple Silicon). Available features depend on the release.

## Does it work offline?

Installed plugins, SSH hosts and local settings work offline; sign-in, cloud sync and model calls require network.

## Are plugins safe?

External plugins run in a sandboxed iframe and can only use declared permissions. `pwb.fetch` is restricted by an origin allowlist, and `desktop` is not available to external plugins.

## Does Agent run commands automatically?

No. It shows a command summary and asks for confirmation before running terminal commands. Unconfirmed commands do not run.

## How do I install an external plugin?

Use Settings → Plugin Center to import a development folder or zip, or install from the Plugin Market. Enable it in Plugin Center afterwards.

## What if an update fails?

Check network and disk space. The desktop app can retry from Settings → About. If the app cannot start after an update, keep the data directory and contact the maintainer.
