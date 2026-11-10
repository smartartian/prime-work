export interface Dictionary {
  nav: {
    home: string;
    release: string;
    docs: string;
    about: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    desc: string;
    primary: string;
    secondary: string;
    meta: string[];
  };
  capabilities: {
    label: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string; points: string[] }>;
  };
  workflow: {
    label: string;
    title: string;
    steps: Array<{ title: string; desc: string }>;
  };
  homeCta: {
    title: string;
    desc: string;
    primary: string;
    secondary: string;
  };
  release: {
    label: string;
    title: string;
    desc: string;
    versionLabel: string;
    version: string;
    platformLabel: string;
    platform: string;
    statusLabel: string;
    status: string;
    notesTitle: string;
    notes: Array<{ version: string; date: string; items: string[] }>;
  };
  docs: {
    label: string;
    title: string;
    desc: string;
    quickTitle: string;
    quickSteps: Array<{ title: string; desc: string }>;
    pluginTitle: string;
    pluginDesc: string;
    faqTitle: string;
    faq: Array<{ q: string; a: string }>;
  };
  about: {
    label: string;
    title: string;
    desc: string;
    paragraphs: string[];
    stackTitle: string;
    stack: string[];
    contactTitle: string;
    contactDesc: string;
    contactAction: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const zh: Dictionary = {
  nav: {
    home: "首页",
    release: "版本",
    docs: "文档",
    about: "关于",
  },
  hero: {
    eyebrow: "macOS 桌面工作台",
    title: "把终端、AI 与日常工具收进一个工作台",
    desc: "插件化扩展、原生 SSH 终端、AI 助手与站点导航在同一处完成。少切几次窗口，多留一点注意力给真正的事。",
    primary: "查看能力",
    secondary: "阅读文档",
    meta: ["Apple Silicon", "本地优先", "命令执行需确认"],
  },
  capabilities: {
    label: "能力",
    title: "四件事，一个界面",
    desc: "不是把工具堆在一起，而是让它们共用同一套导航、权限与数据。",
    items: [
      {
        title: "工作台框架",
        desc: "左侧按分类组织入口，右侧留给插件，中间是你正在做的事。",
        points: ["分类与排序", "页面内嵌浏览", "全局搜索"],
      },
      {
        title: "插件体系",
        desc: "页面菜单、站点导航、SSH 终端与 AI 助手都在插件中心统一启停。",
        points: ["首次启用确认权限", "停用即断开与清理", "单个插件异常不影响他人"],
      },
      {
        title: "SSH 终端",
        desc: "多标签会话、SFTP 文件管理、端口转发与会话日志，连接前做指纹校验。",
        points: ["TOFU 指纹校验", "凭据加密存储", "最近连接排序"],
      },
      {
        title: "AI 助手",
        desc: "Chat 与 Agent 双模式，能调用技能，也能在终端里执行命令——但要你点头。",
        points: ["命令确认后执行", "技能调用记录", "会话重命名与归档"],
      },
    ],
  },
  workflow: {
    label: "工作流",
    title: "从接入到扩展，三步",
    steps: [
      {
        title: "接入",
        desc: "登录账号后，菜单、插件状态与主机列表随账号同步，换机器不重新配。",
      },
      {
        title: "操作",
        desc: "在终端连接主机，浏览文件、转发端口；重复命令交给 AI 助手执行。",
      },
      {
        title: "扩展",
        desc: "按需启用插件与技能。0.0.8 起支持导入外部插件包，扩展不必等官方。",
      },
    ],
  },
  homeCta: {
    title: "先看看最近改了什么",
    desc: "版本页有完整的更新记录，文档页用四步完成上手。",
    primary: "查看版本",
    secondary: "阅读文档",
  },
  release: {
    label: "版本",
    title: "更新记录",
    desc: "当前提供 macOS（Apple Silicon）版本，下载通道即将开放。",
    versionLabel: "最新版本",
    version: "0.0.7",
    platformLabel: "平台",
    platform: "macOS · Apple Silicon",
    statusLabel: "下载状态",
    status: "即将开放",
    notesTitle: "历史版本",
    notes: [
      {
        version: "0.0.7",
        date: "2026-11-10",
        items: [
          "插件接入架构：清单、注册表、路由与导航自动派生",
          "插件中心：权限确认、启停联动清理、异常状态",
          "页面菜单与站点导航：收藏、折叠、拖拽排序、导入导出",
          "SSH：共享主机表单、最近连接排序、会话日志目录",
          "AI 助手：面板宽度记忆、会话管理、技能调用记录",
        ],
      },
      {
        version: "0.0.6",
        date: "",
        items: [
          "SSH 会话日志：录制与回看",
          "SFTP 文件管理：上传、下载与目录浏览",
          "SSH 端口转发：配置持久化，随会话启用",
          "浏览器面板：多标签与书签",
        ],
      },
      {
        version: "0.0.5",
        date: "",
        items: [
          "菜单、分类、插件状态与站点导航接入云同步",
          "AI 会话历史与流式输出",
          "技能接入对话，模型配置支持连通性测试",
        ],
      },
    ],
  },
  docs: {
    label: "文档",
    title: "上手与扩展",
    desc: "从安装到插件开发，按步骤走一遍。",
    quickTitle: "快速上手",
    quickSteps: [
      {
        title: "安装",
        desc: "把应用拖入「应用程序」。首次打开若被系统拦截，在隐私与安全性中允许。",
      },
      {
        title: "登录",
        desc: "点击右上角头像完成登录，之后菜单与主机配置会随账号同步。",
      },
      {
        title: "连接主机",
        desc: "在 SSH 终端新增主机，填写地址与凭据，先做一次连通性测试。",
      },
      {
        title: "启用插件",
        desc: "在设置 → 插件中按需开启；首次启用会列出该插件申请的权限。",
      },
    ],
    pluginTitle: "插件开发",
    pluginDesc:
      "0.0.8 计划支持外部插件包：以 .codex-plugin/plugin.json 描述清单与配置，页面与面板运行在沙箱 iframe 中，通过 window.pwb 调用宿主能力。权限未声明即拒绝。",
    faqTitle: "常见问题",
    faq: [
      {
        q: "数据存在哪里？",
        a: "桌面端保存在本机应用数据目录；登录后菜单、插件状态与主机列表同步到云端，凭据使用加密存储，接口不返回明文。",
      },
      {
        q: "浏览器里能用吗？",
        a: "可以预览界面，但 SSH 终端、文件管理与命令执行需要桌面客户端。",
      },
      {
        q: "支持 Windows 吗？",
        a: "目前提供 macOS（Apple Silicon）版本，Windows 在规划中。",
      },
    ],
  },
  about: {
    label: "关于",
    title: "为每天都要用的人做",
    desc: "一个本地优先的桌面工作台，以及它背后的取舍。",
    paragraphs: [
      "Prime Work 是一个本地优先的桌面工作台。它把散落在浏览器书签、终端窗口与聊天框里的日常操作，收进一个可以自己编排的界面。",
      "我们相信工具应该说明它在做什么：插件要列出申请的权限，AI 执行命令前要经过你的确认，停用一个插件就真的断开并清理。",
    ],
    stackTitle: "技术栈",
    stack: ["React 18", "TypeScript", "Vite", "Electron", "xterm.js"],
    contactTitle: "反馈与建议",
    contactDesc: "问题、想法或插件需求，都欢迎在仓库里提交。",
    contactAction: "前往 GitHub",
  },
  footer: {
    tagline: "一个界面，做完一天的事。",
    rights: "© 2026 Prime Work",
  },
};
