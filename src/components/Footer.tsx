import { useI18n } from "../i18n";

const GITHUB_URL = "https://github.com/smartartian/prime-work";

export function Footer() {
  const { dict } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <span>Prime Work</span>
        </div>
        <p className="footer-tagline">{dict.footer.tagline}</p>
        <div className="footer-meta">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{dict.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
