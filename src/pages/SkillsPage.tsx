import { CatalogPage, type CatalogItem } from "../components/CatalogPage";
import {
  SKILL_CATALOG,
  SKILL_CATEGORIES,
  SKILL_SOURCES,
  type SkillIcon as SkillIconName,
} from "../data/skills";
import { useI18n } from "../i18n";

const GITHUB_URL = "https://github.com/smartartian/prime-work";

function SkillIcon({ kind }: { kind: SkillIconName }) {
  if (kind === "code") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
      </svg>
    );
  }

  if (kind === "doc") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (kind === "meeting") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V3h6v1" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 20V11" />
      <path d="M12 20V5" />
      <path d="M19 20v-6" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function SkillsPage() {
  const { lang, dict } = useI18n();
  const { skills } = dict;

  const items: CatalogItem[] = SKILL_CATALOG.map((skill) => ({
    id: skill.id,
    icon: <SkillIcon kind={skill.icon} />,
    name: skill.name[lang],
    subtitle: skill.id,
    description: skill.desc[lang],
    category: skill.category,
    categoryLabel: skills.categories[skill.category],
    source: skill.source,
    sourceLabel: skills.sources[skill.source],
    version: `v${skill.version}`,
    href: "/docs/ai",
    keywords: skill.keywords,
  }));

  return (
    <CatalogPage
      eyebrow={skills.eyebrow}
      title={skills.title}
      description={skills.desc}
      searchPlaceholder={skills.searchPlaceholder}
      searchClear={skills.searchClear}
      categoriesLabel={skills.categories.label}
      allLabel={skills.categories.all}
      categories={SKILL_CATEGORIES.map((id) => ({ id, label: skills.categories[id] }))}
      sources={SKILL_SOURCES.map((id) => ({ id, label: skills.sources[id] }))}
      items={items}
      countPrefix={skills.countPrefix}
      countUnit={skills.countUnit}
      docsAction={skills.docsAction}
      emptyTitle={skills.emptyTitle}
      emptyDesc={skills.emptyDesc}
      resetLabel={skills.reset}
      aboutTitle={skills.aboutTitle}
      about={skills.about}
      aboutNote={skills.aboutNote}
      tipTitle={skills.tipTitle}
      tipDescription={skills.tipDesc}
      tipLinks={[
        { label: skills.tipPrimary, to: "/docs/ai" },
        { label: skills.tipSecondary, to: GITHUB_URL, external: true },
      ]}
      colon={lang === "zh" ? "：" : ": "}
    />
  );
}
