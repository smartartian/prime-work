import type { Dictionary } from "./zh";

export const en: Dictionary = {
  nav: {
    home: "Home",
    release: "Release",
    docs: "Docs",
    about: "About",
    badge: "Beta",
  },
  hero: {
    title: "Terminal, AI and everyday tools in one workbench",
    desc: "Pluggable extensions, a native SSH terminal, an AI assistant and site navigation in one place. Fewer window switches, more attention for the work that matters.",
    primary: "Explore capabilities",
    secondary: "Read the docs",
    meta: ["Apple Silicon", "Local-first", "Commands need approval"],
  },
  capabilities: {
    label: "Capabilities",
    title: "Four things, one surface",
    desc: "Tools are not stacked together. They share the same navigation, permissions and data.",
    items: [
      {
        title: "Workspace shell",
        desc: "Entries grouped on the left, plugin space on the right, and your current task in the middle.",
        points: ["Categories and ordering", "Embedded page browsing", "Global search"],
      },
      {
        title: "Plugin system",
        desc: "Page menus, site navigation, the SSH terminal and the AI assistant are toggled in one plugin center.",
        points: ["Permission check on enable", "Disable means disconnect and clean up", "One failure stays contained"],
      },
      {
        title: "SSH terminal",
        desc: "Multi-tab sessions, SFTP file management, port forwarding and session logs, with fingerprint checks before connecting.",
        points: ["TOFU fingerprint check", "Encrypted credentials", "Recent connections first"],
      },
      {
        title: "AI assistant",
        desc: "Chat and Agent modes with skill calls, and terminal commands that only run after you approve them.",
        points: ["Approval before execution", "Skill call records", "Session rename and archive"],
      },
    ],
  },
  workflow: {
    label: "Workflow",
    title: "Connect, operate, extend",
    steps: [
      {
        title: "Connect",
        desc: "Sign in once and your menus, plugin states and host list follow the account across machines.",
      },
      {
        title: "Operate",
        desc: "Connect a host, browse files, forward ports, and hand repetitive commands to the AI assistant.",
      },
      {
        title: "Extend",
        desc: "Enable plugins and skills as needed. From 0.0.8, external plugin packages can be imported.",
      },
    ],
  },
  homeCta: {
    title: "See what changed lately",
    desc: "The release page keeps the full history. The docs page gets you started in four steps.",
    primary: "View releases",
    secondary: "Read the docs",
  },
  release: {
    label: "Release",
    title: "Release notes",
    desc: "macOS (Apple Silicon) builds. The download channel is opening soon.",
    versionLabel: "Latest",
    platformLabel: "Platform",
    platform: "macOS · Apple Silicon",
    statusLabel: "Download",
    status: "Opening soon",
    notesTitle: "Previous versions",
    showAll: "Show all versions",
    collapse: "Collapse",
  },
  docs: {
    label: "Docs",
    tocTitle: "On this page",
    viewSource: "View source on GitHub",
    prevLabel: "Previous",
    nextLabel: "Next",
  },
  about: {
    label: "About",
    title: "Built for people who use it daily",
    desc: "A local-first desktop workbench, and the trade-offs behind it.",
    paragraphs: [
      "Prime Work is a local-first desktop workbench. It gathers the daily operations scattered across browser bookmarks, terminal windows and chat boxes into one surface you can arrange yourself.",
      "Tools should be explicit about what they do: plugins list the permissions they request, the AI assistant asks before running a command, and disabling a plugin really disconnects and cleans up.",
    ],
    stackTitle: "Stack",
    stack: ["React 18", "TypeScript", "Vite", "Electron", "xterm.js"],
    contactTitle: "Feedback",
    contactDesc: "Bugs, ideas or plugin requests — open an issue in the repository.",
    contactAction: "Open GitHub",
  },
  footer: {
    tagline: "One surface for the whole day.",
    rights: "© 2026 Prime Work",
  },
};
