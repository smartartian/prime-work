import { CatalogPage, type CatalogItem } from "../components/CatalogPage";
import {
  PLUGIN_CATALOG,
  PLUGIN_CATEGORIES,
  PLUGIN_SOURCES,
  type PluginIcon as PluginIconName,
} from "../data/plugins";
import { useI18n } from "../i18n";

function PluginIcon({ kind }: { kind: PluginIconName }) {
  if (kind === "terminal") {
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
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="m7.5 9.5 2.5 2.5-2.5 2.5" />
        <path d="M13 15h3.5" />
      </svg>
    );
  }

  if (kind === "sites") {
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
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c2.2 2.3 3.3 5.2 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.2-3.3-8.5S9.8 5.8 12 3.5Z" />
      </svg>
    );
  }

  if (kind === "ai") {
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
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4" />
        <path d="M8.5 14h.01" />
        <path d="M15.5 14h.01" />
        <path d="M9 17h6" />
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
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M8.5 4v16" />
      <path d="M12.5 9.5h4.5" />
      <path d="M12.5 14h4.5" />
    </svg>
  );
}

export function MarketPage() {
  const { lang, dict } = useI18n();
  const { market } = dict;

  const items: CatalogItem[] = PLUGIN_CATALOG.map((plugin) => ({
    id: plugin.id,
    icon: <PluginIcon kind={plugin.icon} />,
    name: plugin.name[lang],
    subtitle: plugin.id,
    description: plugin.desc[lang],
    category: plugin.category,
    categoryLabel: market.categories[plugin.category],
    source: plugin.source,
    sourceLabel: market.sources[plugin.source],
    version: plugin.version ? `v${plugin.version}` : market.latest,
    requirement: plugin.minAppVersion
      ? ` · ${market.minAppPrefix} ${plugin.minAppVersion}+`
      : "",
    tags: plugin.permissions,
    href: `/docs/${plugin.docsSlug}`,
    keywords: plugin.permissions,
  }));

  return (
    <CatalogPage
      eyebrow={market.eyebrow}
      title={market.title}
      description={market.desc}
      searchPlaceholder={market.searchPlaceholder}
      searchClear={market.searchClear}
      categoriesLabel={market.categories.label}
      allLabel={market.categories.all}
      categories={PLUGIN_CATEGORIES.map((id) => ({ id, label: market.categories[id] }))}
      sources={PLUGIN_SOURCES.map((id) => ({ id, label: market.sources[id] }))}
      items={items}
      countPrefix={market.countPrefix}
      countUnit={market.countUnit}
      docsAction={market.docsAction}
      emptyTitle={market.emptyTitle}
      emptyDesc={market.emptyDesc}
      resetLabel={market.reset}
      aboutTitle={market.aboutTitle}
      about={market.about}
      aboutNote={market.aboutNote}
      tipTitle={market.tipTitle}
      tipDescription={market.tipDesc}
      tipLinks={[
        { label: market.tipPrimary, to: "/docs/plugins" },
        { label: market.tipSecondary, to: "/docs/plugin-manifest" },
      ]}
      colon={lang === "zh" ? "：" : ": "}
    />
  );
}
