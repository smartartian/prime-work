# SSH terminal

SSH terminal (`ssh-terminal`) is a published Prime Work plugin. It bridges full SSH capabilities through the host `pwb.ssh.*` API. The entry appears as "SSH terminal" or "SSH terminal (ext)".

## Install and enable

- Install from **Settings → Plugin Market**, or import a zip in Plugin Center.
- Requires client 0.0.17+; check the market for the exact requirement.
- Enable it in **Settings → Plugin Center**.
- Permissions: `ssh`, `storage`.

## Hosts

When adding a host, provide the address, port, username and authentication:

- **Password**: encrypted locally and server-side
- **Private key**: choose a local key file
- **ssh-agent**: use keys from the system agent

Hosts are sorted by recent connections; the plugin page and settings share the same host data.

## Fingerprints

On the first connection, the app shows the host fingerprint (TOFU). Accept it only after comparing it with the server; a changed fingerprint triggers another prompt.

## Multi-tab sessions

Open multiple session tabs and reconnect after disconnects. Output can be copied, and selected text can be sent to the AI assistant as context.

## SFTP

Browse remote directories, upload and download files, and create, rename or delete files.

## Port forwarding

- Local forwarding
- Remote forwarding
- Dynamic SOCKS5

Rules persist and start with the session.

## Session logs

Terminal output can be recorded locally and reviewed per host. Summary and full-log switches sync with your account.

## Security tips

- Prefer key authentication with a passphrase.
- Avoid saving plaintext passwords on untrusted networks.
- Review known host fingerprints regularly.
- Only grant `ssh` capabilities to plugins you trust.
