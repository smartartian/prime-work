type SkillLang = "zh" | "en";

export type SkillIcon = "code" | "doc" | "meeting" | "chart";

export type SkillCategory = "writing" | "data" | "collab" | "dev";

export type SkillSource = "builtin" | "imported";

export interface CatalogSkill {
  id: string;
  icon: SkillIcon;
  category: SkillCategory;
  source: SkillSource;
  version: string;
  name: Record<SkillLang, string>;
  desc: Record<SkillLang, string>;
  /** 搜索用的中英文关键词 */
  keywords: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = ["writing", "data", "collab", "dev"];

export const SKILL_SOURCES: SkillSource[] = ["builtin", "imported"];

/** 官网展示的内置技能，与各技能目录下的 manifest.ts 保持一致 */
export const SKILL_CATALOG: CatalogSkill[] = [
  {
    id: "code-review",
    icon: "code",
    category: "dev",
    source: "builtin",
    version: "1.2.0",
    name: { zh: "代码审查", en: "Code Review" },
    desc: {
      zh: "按改动范围逐文件检查正确性、可维护性与风格问题，输出可定位的问题清单。",
      en: "Reviews each changed file for correctness, maintainability and style, then lists issues with locations.",
    },
    keywords: ["代码", "审查", "review", "diff", "正确性", "可维护性", "code"],
  },
  {
    id: "doc-summary",
    icon: "doc",
    category: "writing",
    source: "builtin",
    version: "1.0.3",
    name: { zh: "文档摘要", en: "Document Summary" },
    desc: {
      zh: "把长文档压缩成要点、结论与待办三段结构，并保留每段的原文出处。",
      en: "Condenses long documents into highlights, conclusions and follow-ups, keeping the source for each part.",
    },
    keywords: ["文档", "摘要", "summary", "长文", "要点", "document"],
  },
  {
    id: "meeting-notes",
    icon: "meeting",
    category: "collab",
    source: "builtin",
    version: "0.9.0",
    name: { zh: "会议纪要", en: "Meeting Notes" },
    desc: {
      zh: "从会议记录中抽取决策、分歧与负责人，生成可直接跟进的纪要条目。",
      en: "Extracts decisions, disagreements and owners from meeting records into actionable notes.",
    },
    keywords: ["会议", "纪要", "meeting", "决策", "待办", "notes"],
  },
  {
    id: "data-snapshot",
    icon: "chart",
    category: "data",
    source: "builtin",
    version: "1.1.0",
    name: { zh: "数据快照", en: "Data Snapshot" },
    desc: {
      zh: "固定某次查询的口径与时间点，方便前后对比时追溯数字来源。",
      en: "Pins the definition and time range of a query so numbers stay traceable across comparisons.",
    },
    keywords: ["数据", "快照", "snapshot", "指标", "口径", "data"],
  },
];
