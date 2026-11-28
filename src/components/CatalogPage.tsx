import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

export interface CatalogItem {
  id: string;
  icon: ReactNode;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  categoryLabel: string;
  source: string;
  sourceLabel: string;
  /** 已格式化的版本，如 v0.1.0 / 最新版 */
  version: string;
  /** 版本后的附加要求，如「需客户端 0.0.21+」 */
  requirement?: string;
  tags?: string[];
  href: string;
  keywords?: string[];
}

export interface CatalogOption {
  id: string;
  label: string;
}

export interface CatalogTipLink {
  label: string;
  to: string;
  external?: boolean;
}

interface CatalogPageProps {
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  searchClear: string;
  categoriesLabel: string;
  allLabel: string;
  categories: CatalogOption[];
  sources: CatalogOption[];
  items: CatalogItem[];
  countPrefix: string;
  countUnit: string;
  docsAction: string;
  emptyTitle: string;
  emptyDesc: string;
  resetLabel: string;
  aboutTitle: string;
  about: Array<{ term: string; desc: string }>;
  aboutNote: string;
  tipTitle: string;
  tipDescription: string;
  tipLinks: CatalogTipLink[];
  colon: string;
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

/** 插件市场与技能市场共用的目录页：搜索、分类、来源筛选与卡片网格 */
export function CatalogPage({
  eyebrow,
  title,
  description,
  searchPlaceholder,
  searchClear,
  categoriesLabel,
  allLabel,
  categories,
  sources,
  items,
  countPrefix,
  countUnit,
  docsAction,
  emptyTitle,
  emptyDesc,
  resetLabel,
  aboutTitle,
  about,
  aboutNote,
  tipTitle,
  tipDescription,
  tipLinks,
  colon,
}: CatalogPageProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [source, setSource] = useState("all");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (source !== "all" && item.source !== source) return false;
      if (!keyword) return true;
      return [
        item.name,
        item.description,
        item.subtitle,
        ...(item.keywords ?? []),
        ...(item.tags ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });
  }, [category, items, query, source]);

  const countBy = (field: "category" | "source", id: string) =>
    id === "all" ? items.length : items.filter((item) => item[field] === id).length;

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    setSource("all");
  };

  return (
    <div className="catalog-page">
      <header className="catalog-hero">
        <div className="catalog-hero-inner">
          <p className="catalog-eyebrow">
            <span className="catalog-eyebrow-line" />
            {eyebrow}
            <span className="catalog-eyebrow-line" />
          </p>
          <h1 className="catalog-title">{title}</h1>
          <p className="catalog-desc">{description}</p>

          <div className="catalog-search">
            <svg
              className="catalog-search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              ref={searchRef}
              className="catalog-search-input"
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <button
                className="catalog-search-clear"
                type="button"
                aria-label={searchClear}
                onClick={() => setQuery("")}
              >
                ×
              </button>
            ) : (
              <kbd className="catalog-kbd" aria-hidden="true">
                /
              </kbd>
            )}
          </div>
        </div>
      </header>

      <div className="catalog-layout section-inner">
        <aside className="catalog-side">
          <p className="catalog-side-label">{categoriesLabel}</p>
          <div className="catalog-side-group">
            <button
              type="button"
              className={`catalog-side-item${category === "all" ? " is-active" : ""}`}
              aria-pressed={category === "all"}
              onClick={() => setCategory("all")}
            >
              <span className="catalog-side-dot" />
              <span className="catalog-side-text">{allLabel}</span>
              <span className="catalog-side-count">{countBy("category", "all")}</span>
            </button>
            {categories
              .filter((option) => countBy("category", option.id) > 0)
              .map((option) => (
                <button
                  type="button"
                  className={`catalog-side-item${category === option.id ? " is-active" : ""}`}
                  aria-pressed={category === option.id}
                  key={option.id}
                  onClick={() => setCategory(option.id)}
                >
                  <span className="catalog-side-dot" />
                  <span className="catalog-side-text">{option.label}</span>
                  <span className="catalog-side-count">{countBy("category", option.id)}</span>
                </button>
              ))}
          </div>
        </aside>

        <div className="catalog-main">
          <div className="catalog-chips">
            <button
              type="button"
              className={`catalog-chip${source === "all" ? " is-active" : ""}`}
              aria-pressed={source === "all"}
              onClick={() => setSource("all")}
            >
              {allLabel}
              <span className="catalog-chip-count">{countBy("source", "all")}</span>
            </button>
            {sources.map((option) => (
              <button
                type="button"
                className={`catalog-chip${source === option.id ? " is-active" : ""}`}
                aria-pressed={source === option.id}
                key={option.id}
                onClick={() => setSource(option.id)}
              >
                {option.label}
                <span className="catalog-chip-count">{countBy("source", option.id)}</span>
              </button>
            ))}
            <span className="catalog-count">
              {countPrefix} {filtered.length} {countUnit}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="catalog-grid">
              {filtered.map((item) => (
                <Link className="catalog-card" to={item.href} key={item.id}>
                  <div className="catalog-card-head">
                    <span className="catalog-logo">{item.icon}</span>
                    <span className="catalog-card-titles">
                      <span className="catalog-card-name">{item.name}</span>
                      <span className="catalog-card-tech">{item.subtitle}</span>
                    </span>
                  </div>

                  <div className="catalog-tags">
                    <span className="catalog-cat">{item.categoryLabel}</span>
                    <span className={`catalog-badge is-${item.source}`}>{item.sourceLabel}</span>
                    {item.tags?.map((tag) => (
                      <span className="catalog-perm" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="catalog-tagline">{item.description}</p>

                  <div className="catalog-card-foot">
                    <span className="catalog-author">
                      {item.version}
                      {item.requirement}
                    </span>
                    <span className="catalog-more">{docsAction} →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="catalog-empty">
              <p>{emptyTitle}</p>
              <span>{emptyDesc}</span>
              <br />
              <button type="button" onClick={resetFilters}>
                {resetLabel}
              </button>
            </div>
          )}

          <details className="catalog-about">
            <summary>{aboutTitle}</summary>
            <div className="catalog-about-body">
              <ul>
                {about.map((entry) => (
                  <li key={entry.term}>
                    <strong>{entry.term}</strong>
                    {colon}
                    {entry.desc}
                  </li>
                ))}
              </ul>
              <p>{aboutNote}</p>
            </div>
          </details>

          <div className="catalog-tip">
            <p className="catalog-tip-title">{tipTitle}</p>
            <p>{tipDescription}</p>
            <div className="catalog-tip-actions">
              {tipLinks.map((link) =>
                link.external ? (
                  <a
                    className="text-link"
                    href={link.to}
                    target="_blank"
                    rel="noreferrer"
                    key={link.label}
                  >
                    {link.label} →
                  </a>
                ) : (
                  <Link className="text-link" to={link.to} key={link.label}>
                    {link.label} →
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
