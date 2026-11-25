type PluginLang = "zh" | "en";

export type PluginIcon = "terminal" | "sites" | "links" | "ai";

export type PluginCategory = "terminal" | "nav" | "ai";

export type PluginSource = "builtin" | "official";

export interface CatalogPlugin {
  /** 插件包名，与 plugin.json 的 name 一致 */
  id: string;
  icon: PluginIcon;
  category: PluginCategory;
  source: PluginSource;
  /** 未知版本用 null，展示为「最新版」 */
  version: string | null;
  minAppVersion: string | null;
  permissions: string[];
  docsSlug: string;
  name: Record<PluginLang, string>;
  desc: Record<PluginLang, string>;
}

export const PLUGIN_CATEGORIES: PluginCategory[] = ["terminal", "nav", "ai"];

export const PLUGIN_SOURCES: PluginSource[] = ["builtin", "official"];

/** 官网上展示的插件目录：内置插件与已上架插件 */
export const PLUGIN_CATALOG: CatalogPlugin[] = [
  {
    id: "ai-assistant",
    icon: "ai",
    category: "ai",
    source: "builtin",
    version: "1.0.0",
    minAppVersion: null,
    permissions: ["desktop", "ai", "network"],
    docsSlug: "ai",
    name: { zh: "AI 助手", en: "AI Assistant" },
    desc: {
      zh: "在右侧面板中与已接入的模型对话，支持多会话切换与技能调用。",
      en: "Chat with a connected model in the right panel, with multiple sessions and skill calls.",
    },
  },
  {
    id: "ssh-terminal",
    icon: "terminal",
    category: "terminal",
    source: "official",
    version: null,
    minAppVersion: "0.0.17",
    permissions: ["ssh", "storage"],
    docsSlug: "ssh",
    name: { zh: "SSH 终端", en: "SSH Terminal" },
    desc: {
      zh: "通过宿主 pwb.ssh.* 桥接完整的 SSH 能力，主机凭据加密保存在本机。",
      en: "Bridges full SSH capabilities through pwb.ssh.*, with host credentials encrypted on this machine.",
    },
  },
  {
    id: "site-nav",
    icon: "sites",
    category: "nav",
    source: "official",
    version: "0.1.0",
    minAppVersion: "0.0.21",
    permissions: ["storage", "network"],
    docsSlug: "site-nav",
    name: { zh: "站点导航", en: "Site Navigation" },
    desc: {
      zh: "按分组收纳常用站点，卡片色块由域名自动生成，点击用系统浏览器打开。",
      en: "Group your favourite sites. Card colours follow the domain and links open in the system browser.",
    },
  },
  {
    id: "page-menu",
    icon: "links",
    category: "nav",
    source: "official",
    version: "0.0.1",
    minAppVersion: "0.0.16",
    permissions: ["storage", "network"],
    docsSlug: "page-menu",
    name: { zh: "页面菜单", en: "Page Menu" },
    desc: {
      zh: "左侧分类、右侧链接列表，集中收纳外链页面并交给系统浏览器打开。",
      en: "Categories on the left, links on the right. External pages open in the system browser.",
    },
  },
];
