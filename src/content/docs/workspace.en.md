# Workspace and Plugin Center

The main window has a left navigation, a page container and an AI panel on the right.

## Left navigation

- Workbench, site navigation, page menu, SSH terminal and AI assistant entries
- Categories, favorites, collapsing and drag ordering
- Menus and categories sync with your account
- Refreshes after installing or uninstalling plugins

## Page container

- AI and external plugin pages share the same border, radius and shadow
- External plugins are loaded by the host from `main.js`; Shadow DOM sandboxing isolates their styles
- Embedded pages depend on the plugin; the market Page Menu opens links in the system browser

## Plugin Center

Open **Settings → Plugin Center** to:

- Browse plugins by type: development first, then global / feature / panel / tool groups
- Enable or disable plugins; core plugins are read-only and cannot be disabled or removed
- Review source (core / built-in / external), domain tag, permissions and client requirements
- Import a `.zip` package, a local development folder, or source from the local debug service
- Configure menus for older packages that do not declare them
- Uninstall a plugin; private data stays locally by default and can be cleared in Settings → Privacy & Data → Local data

Disabling a plugin hides its entry and disconnects related capabilities; data is kept by default. Plugins that declare navigation menus create their entries automatically, and menus with `section: settings` appear under Settings → Plugin Settings.

## Settings

The settings center includes:

- Account, version and updates
- Plugin Center and Plugin Market
- Plugin Settings: pages registered by plugin manifests, such as SSH Host Config
- Model configuration and connectivity tests
- Appearance, hardware acceleration and about

## Search

A global search entry helps locate menus, sites and plugins. Results depend on the enabled plugins.
