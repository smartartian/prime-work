import quickstartZh from "../content/docs/quickstart.md?raw";
import quickstartEn from "../content/docs/quickstart.en.md?raw";
import installZh from "../content/docs/install.md?raw";
import installEn from "../content/docs/install.en.md?raw";
import accountZh from "../content/docs/account.md?raw";
import accountEn from "../content/docs/account.en.md?raw";
import workspaceZh from "../content/docs/workspace.md?raw";
import workspaceEn from "../content/docs/workspace.en.md?raw";
import sshZh from "../content/docs/ssh.md?raw";
import sshEn from "../content/docs/ssh.en.md?raw";
import aiZh from "../content/docs/ai.md?raw";
import aiEn from "../content/docs/ai.en.md?raw";
import faqZh from "../content/docs/faq.md?raw";
import faqEn from "../content/docs/faq.en.md?raw";
import pluginsZh from "../content/docs/plugins.md?raw";
import pluginsEn from "../content/docs/plugins.en.md?raw";
import manifestZh from "../content/docs/plugin-manifest.md?raw";
import manifestEn from "../content/docs/plugin-manifest.en.md?raw";
import pluginMarketZh from "../content/docs/plugin-market.md?raw";
import pluginMarketEn from "../content/docs/plugin-market.en.md?raw";
import siteNavZh from "../content/docs/site-nav.md?raw";
import siteNavEn from "../content/docs/site-nav.en.md?raw";
import pageMenuZh from "../content/docs/page-menu.md?raw";
import pageMenuEn from "../content/docs/page-menu.en.md?raw";

export type DocLang = "zh" | "en";

export interface DocEntry {
  slug: string;
  group: string;
  title: Record<DocLang, string>;
  description: Record<DocLang, string>;
  content: Record<DocLang, string>;
}

export const DOC_GROUPS = [
  { id: "software", label: { zh: "软件能力", en: "Capabilities" } },
  { id: "dev", label: { zh: "插件开发", en: "Plugin Development" } },
  { id: "market", label: { zh: "已上架插件", en: "Published Plugins" } },
] as const;

export const DOCS: DocEntry[] = [
  {
    slug: "quickstart",
    group: "software",
    title: { zh: "快速上手", en: "Quick start" },
    description: {
      zh: "登录、连接主机并完成第一个任务。",
      en: "Sign in, connect a host and finish your first task.",
    },
    content: { zh: quickstartZh, en: quickstartEn },
  },
  {
    slug: "install",
    group: "software",
    title: { zh: "安装与更新", en: "Install and update" },
    description: {
      zh: "macOS / Windows 安装、首次启动与自动更新。",
      en: "macOS / Windows install, first launch and auto-update.",
    },
    content: { zh: installZh, en: installEn },
  },
  {
    slug: "account",
    group: "software",
    title: { zh: "账号与同步", en: "Account and sync" },
    description: {
      zh: "飞书登录、云端同步与本地数据。",
      en: "Feishu sign-in, cloud sync and local data.",
    },
    content: { zh: accountZh, en: accountEn },
  },
  {
    slug: "workspace",
    group: "software",
    title: { zh: "工作台与插件中心", en: "Workspace and Plugin Center" },
    description: {
      zh: "左侧导航、页面容器、插件中心与设置。",
      en: "Left navigation, page container, Plugin Center and settings.",
    },
    content: { zh: workspaceZh, en: workspaceEn },
  },
  {
    slug: "ai",
    group: "software",
    title: { zh: "AI 助手", en: "AI assistant" },
    description: {
      zh: "Chat / Agent 模式、技能与命令确认。",
      en: "Chat / Agent modes, skills and command approval.",
    },
    content: { zh: aiZh, en: aiEn },
  },
  {
    slug: "faq",
    group: "software",
    title: { zh: "常见问题", en: "FAQ" },
    description: {
      zh: "数据、网络、平台与安全相关的问题。",
      en: "Data, network, platform and security questions.",
    },
    content: { zh: faqZh, en: faqEn },
  },
  {
    slug: "plugins",
    group: "dev",
    title: { zh: "插件开发", en: "Plugin development" },
    description: {
      zh: "插件包结构、SDK 与本地调试。",
      en: "Package layout, SDK and local debugging.",
    },
    content: { zh: pluginsZh, en: pluginsEn },
  },
  {
    slug: "plugin-manifest",
    group: "dev",
    title: { zh: "插件清单参考", en: "Plugin manifest reference" },
    description: {
      zh: "plugin.json 字段、权限与配置表单。",
      en: "plugin.json fields, permissions and settings forms.",
    },
    content: { zh: manifestZh, en: manifestEn },
  },
  {
    slug: "plugin-market",
    group: "market",
    title: { zh: "插件市场", en: "Plugin Market" },
    description: {
      zh: "安装、更新与卸载外部插件。",
      en: "Install, update and remove published plugins.",
    },
    content: { zh: pluginMarketZh, en: pluginMarketEn },
  },
  {
    slug: "ssh",
    group: "market",
    title: { zh: "SSH 终端", en: "SSH terminal" },
    description: {
      zh: "主机、认证、SFTP、端口转发和会话日志。",
      en: "Hosts, authentication, SFTP, port forwarding and session logs.",
    },
    content: { zh: sshZh, en: sshEn },
  },
  {
    slug: "site-nav",
    group: "market",
    title: { zh: "站点导航", en: "Site Navigation" },
    description: {
      zh: "分组收纳常用站点，使用系统浏览器打开。",
      en: "Grouped sites opened in the system browser.",
    },
    content: { zh: siteNavZh, en: siteNavEn },
  },
  {
    slug: "page-menu",
    group: "market",
    title: { zh: "页面菜单", en: "Page Menu" },
    description: {
      zh: "集中收纳外链页面，使用系统浏览器打开。",
      en: "External links opened in the system browser.",
    },
    content: { zh: pageMenuZh, en: pageMenuEn },
  },
];

export function getDoc(slug?: string): DocEntry | undefined {
  if (!slug) return DOCS[0];
  return DOCS.find((doc) => doc.slug === slug);
}

export function getDocHref(doc: DocEntry): string {
  return doc.slug === DOCS[0].slug ? "/docs" : `/docs/${doc.slug}`;
}

export function getAdjacentDocs(slug: string) {
  const index = DOCS.findIndex((doc) => doc.slug === slug);
  return {
    prev: index > 0 ? DOCS[index - 1] : null,
    next: index >= 0 && index < DOCS.length - 1 ? DOCS[index + 1] : null,
  };
}
