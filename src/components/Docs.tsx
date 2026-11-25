import { isValidElement, useEffect, useMemo, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { DOC_GROUPS, DOCS, getAdjacentDocs, getDocHref, type DocEntry } from "../data/docs";
import { useI18n } from "../i18n";

const GITHUB_URL = "https://github.com/smartartian/prime-work";

interface TocItem {
  id: string;
  text: string;
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[`*_~\[\]()]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

function nodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    return nodeText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const text = match[1]
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();

    items.push({ id: slugifyHeading(text), text });
  }

  return items;
}

const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="docs-title">{children}</h1>,
  h2: ({ children }) => <h2 id={slugifyHeading(nodeText(children))}>{children}</h2>,
  h3: ({ children }) => <h3 id={slugifyHeading(nodeText(children))}>{children}</h3>,
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return <Link to={href}>{children}</Link>;
    }
    if (href?.startsWith("http") || href?.startsWith("mailto:")) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return <a href={href}>{children}</a>;
  },
};

export function Docs({ doc }: { doc: DocEntry }) {
  const { lang, dict, setLang } = useI18n();
  const { docs } = dict;
  const title = doc.title[lang];
  const content = doc.content[lang];
  const toc = useMemo(() => extractToc(content), [content]);
  const { prev, next } = getAdjacentDocs(doc.slug);
  const sourceUrl = `${GITHUB_URL}/blob/main/src/content/docs/${doc.slug}${lang === "en" ? ".en" : ""}.md`;

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} · Prime Work ${docs.label}`;
    return () => {
      document.title = previous;
    };
  }, [title, docs.label]);

  return (
    <div className="docs-theme">
      <header className="docs-topbar">
        <div className="docs-topbar-inner">
          <Link className="docs-brand" to="/" aria-label="Prime Work">
            <img
              className="docs-brand-mark"
              src={`${import.meta.env.BASE_URL}assets/logo-icon.svg`}
              alt=""
              width={26}
              height={26}
            />
            <span className="docs-brand-name">Prime Work</span>
            <span className="docs-brand-badge">{docs.label}</span>
          </Link>

          <nav className="docs-topnav" aria-label={docs.label}>
            <Link to="/">{dict.nav.home}</Link>
            <Link to="/market">{dict.nav.market}</Link>
            <Link to="/skills">{dict.nav.skills}</Link>
            <Link to="/release">{dict.nav.release}</Link>
            <Link to="/about">{dict.nav.about}</Link>
          </nav>

          <div className="docs-topbar-actions">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === "zh" ? "is-active" : ""}
                aria-pressed={lang === "zh"}
                onClick={() => setLang("zh")}
              >
                中
              </button>
              <button
                type="button"
                className={lang === "en" ? "is-active" : ""}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            <a className="docs-gh" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="docs-shell">
        <aside className="docs-sidebar">
          <nav aria-label={docs.label}>
            {DOC_GROUPS.map((group, groupIndex) => {
              const items = DOCS.filter((item) => item.group === group.id);
              if (items.length === 0) return null;
              return (
                <div className="docs-side-group" key={group.id}>
                  <span className="docs-side-title">{group.label[lang]}</span>
                  {items.map((item, itemIndex) => (
                    <Link
                      key={item.slug}
                      to={getDocHref(item)}
                      className={item.slug === doc.slug ? "is-active" : ""}
                    >
                      <span className="docs-side-index">
                        {groupIndex + 1}.{itemIndex + 1}
                      </span>
                      <span>{item.title[lang]}</span>
                    </Link>
                  ))}
                </div>
              );
            })}
          </nav>
        </aside>

        <article className="docs-article">
          <div className="docs-breadcrumb">
            {docs.label} / {title}
          </div>

          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {content}
          </ReactMarkdown>

          <div className="docs-page-meta">
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              {docs.viewSource} ↗
            </a>
          </div>

          <nav className="docs-pager" aria-label={docs.nextLabel}>
            {prev && (
              <Link className="docs-pager-link" to={getDocHref(prev)}>
                <span className="docs-pager-label">← {docs.prevLabel}</span>
                <span className="docs-pager-title">{prev.title[lang]}</span>
              </Link>
            )}
            {next && (
              <Link className="docs-pager-link docs-pager-link--next" to={getDocHref(next)}>
                <span className="docs-pager-label">{docs.nextLabel} →</span>
                <span className="docs-pager-title">{next.title[lang]}</span>
              </Link>
            )}
          </nav>
        </article>

        {toc.length > 0 && (
          <aside className="docs-toc">
            <span className="docs-toc-title">{docs.tocTitle}</span>
            <nav aria-label={docs.tocTitle}>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.text}
                </a>
              ))}
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
}
