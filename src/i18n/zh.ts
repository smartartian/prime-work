export interface Dictionary {
  nav: {
    home: string;
    market: string;
    skills: string;
    release: string;
    docs: string;
    about: string;
    badge: string;
  };
  hero: {
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
    platformLabel: string;
    platform: string;
    statusLabel: string;
    status: string;
    notesTitle: string;
    showAll: string;
    collapse: string;
  };
  market: {
    label: string;
    eyebrow: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    searchClear: string;
    countPrefix: string;
    countUnit: string;
    categories: {
      label: string;
      all: string;
      terminal: string;
      nav: string;
      ai: string;
    };
    sources: {
      all: string;
      builtin: string;
      official: string;
    };
    minAppPrefix: string;
    latest: string;
    docsAction: string;
    emptyTitle: string;
    emptyDesc: string;
    reset: string;
    aboutTitle: string;
    about: Array<{ term: string; desc: string }>;
    aboutNote: string;
    tipTitle: string;
    tipDesc: string;
    tipPrimary: string;
    tipSecondary: string;
  };
  skills: {
    label: string;
    eyebrow: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    searchClear: string;
    countPrefix: string;
    countUnit: string;
    categories: {
      label: string;
      all: string;
      writing: string;
      data: string;
      collab: string;
      dev: string;
    };
    sources: {
      all: string;
      builtin: string;
      imported: string;
    };
    docsAction: string;
    emptyTitle: string;
    emptyDesc: string;
    reset: string;
    aboutTitle: string;
    about: Array<{ term: string; desc: string }>;
    aboutNote: string;
    tipTitle: string;
    tipDesc: string;
    tipPrimary: string;
    tipSecondary: string;
  };
  docs: {
    label: string;
    tocTitle: string;
    viewSource: string;
    prevLabel: string;
    nextLabel: string;
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
    market: "插件市场",
    skills: "技能市场",
    release: "版本",
    docs: "文档",
    about: "关于",
    badge: "测试版",
  },
  hero: {
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
    platformLabel: "平台",
    platform: "macOS · Apple Silicon",
    statusLabel: "下载状态",
    status: "即将开放",
    notesTitle: "历史版本",
    showAll: "查看全部版本",
    collapse: "收起",
  },
  market: {
    label: "插件市场",
    eyebrow: "插件生态全景",
    title: "插件市场",
    desc: "Prime Work 的日常能力由插件组合而成。这里平铺展示内置与已上架的插件，安装前看清权限。",
    searchPlaceholder: "搜索插件名称、介绍或权限…",
    searchClear: "清除搜索",
    countPrefix: "共",
    countUnit: "个插件",
    categories: {
      label: "插件分类",
      all: "全部",
      terminal: "终端",
      nav: "导航",
      ai: "AI",
    },
    sources: {
      all: "全部",
      builtin: "内置",
      official: "官方",
    },
    minAppPrefix: "需客户端",
    latest: "最新版",
    docsAction: "查看详情",
    emptyTitle: "没有匹配的插件",
    emptyDesc: "试试换个关键词，或清除筛选条件。",
    reset: "清除筛选",
    aboutTitle: "关于插件市场",
    about: [
      {
        term: "内置插件",
        desc: "随客户端发布，无需安装，例如 AI 助手。",
      },
      {
        term: "官方插件",
        desc: "由官方维护并在插件市场上架，可安装、更新与卸载，例如 SSH 终端、站点导航与页面菜单。",
      },
      {
        term: "外部插件",
        desc: "从市场安装或离线导入的 zip 包，运行在沙箱中，不能声明 desktop 权限。",
      },
    ],
    aboutNote:
      "卡片上的权限来自插件清单，安装前请确认；版本与客户端要求以客户端内的插件市场为准。",
    tipTitle: "想发布自己的插件？",
    tipDesc:
      "插件是一个 zip 包，通过 window.pwb 与宿主通信。开发指南覆盖清单、SDK 与本地调试；也可以在客户端「设置 → 插件市场 → 上传插件包」发布。",
    tipPrimary: "插件开发",
    tipSecondary: "清单参考",
  },
  skills: {
    label: "技能市场",
    eyebrow: "技能生态全景",
    title: "技能市场",
    desc: "技能是 AI 助手的可复用指令集。内置技能开箱即用，也可以从网址导入 SKILL.md 扩展。",
    searchPlaceholder: "搜索技能名称、介绍或标签…",
    searchClear: "清除搜索",
    countPrefix: "共",
    countUnit: "个技能",
    categories: {
      label: "技能分类",
      all: "全部",
      writing: "文档",
      data: "数据",
      collab: "协作",
      dev: "开发",
    },
    sources: {
      all: "全部",
      builtin: "内置",
      imported: "已导入",
    },
    docsAction: "查看说明",
    emptyTitle: "没有匹配的技能",
    emptyDesc: "试试换个关键词，或清除筛选条件。",
    reset: "清除筛选",
    aboutTitle: "关于技能市场",
    about: [
      {
        term: "内置技能",
        desc: "随客户端发布，在「设置 → 技能配置」中启用或卸载，例如代码审查、文档摘要、会议纪要与数据快照。",
      },
      {
        term: "导入技能",
        desc: "从网址导入 SKILL.md，保存在本机，可像内置技能一样在对话中调用。",
      },
      {
        term: "调用方式",
        desc: "在 AI 助手输入「/」选择技能，或由模型根据任务自动判断。",
      },
    ],
    aboutNote: "技能说明、使用步骤与版本以客户端「设置 → 技能配置」为准。",
    tipTitle: "想写一个技能？",
    tipDesc:
      "技能以文件夹维护：manifest.ts 保存元数据，prompt.md 保存指令与规则；导入的 SKILL.md 会直接展示在技能详情页。",
    tipPrimary: "AI 助手文档",
    tipSecondary: "GitHub",
  },
  docs: {
    label: "文档",
    tocTitle: "本页目录",
    viewSource: "在 GitHub 上查看源码",
    prevLabel: "上一篇",
    nextLabel: "下一篇",
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
