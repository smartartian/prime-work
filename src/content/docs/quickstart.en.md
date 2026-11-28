# Quick start

Prime Work brings the SSH terminal, AI assistant, site navigation and plugins into one workbench. This guide takes you from sign-in to your first task.

## Sign in

Prime Work uses a Feishu account. Click sign in, authorize in Feishu, and return to the app.

After signing in, menus, categories, plugin states, site navigation, SSH hosts and AI sessions sync with your account and are restored on another device.

## Connect a host

Open **SSH terminal** on the left, click "Add host", and fill in:

- Host and port
- Username
- Authentication: password, private key, or ssh-agent

On the first connection, compare the host fingerprint with the server before accepting it. You can then open multi-tab sessions, browse SFTP files, or configure port forwarding.

See [SSH terminal](/docs/ssh) for details.

## Enable plugins

Open **Settings → Plugin Center** and enable what you need. The first enable lists the requested permissions. Disabling hides the entry and disconnects related capabilities; uninstalling cleans the plugin directory.

External plugins can be imported from a development folder, the local debug service, or a `.zip` package. The host mounts them directly with an optional Shadow DOM sandbox, and undeclared permissions are denied. Plugins that declare navigation menus create their entries automatically.

## Try the AI assistant

Open the **AI assistant** on the right:

1. Configure a model in Settings → Model Configuration and test connectivity.
2. Ask in Chat mode, or switch to Agent mode for multi-step tasks.
3. Agent asks for confirmation before running terminal commands.

Type `/` to select a skill. See [AI assistant](/docs/ai) for details.

## Next

- [Install and update](/docs/install)
- [Plugin development](/docs/plugins)
- [FAQ](/docs/faq)
