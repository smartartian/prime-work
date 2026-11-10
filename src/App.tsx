import { useEffect, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useI18n } from "./i18n";
import { AboutPage } from "./pages/AboutPage";
import { DocsPage } from "./pages/DocsPage";
import { HomePage } from "./pages/HomePage";
import { ReleasePage } from "./pages/ReleasePage";

const GITHUB_URL = "https://github.com/smartartian/prime-work";
/** GitHub Pages 部署在 /prime-work/ 下，basename 跟随构建时的 base */
const BASENAME = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function Header() {
  const { lang, dict, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? "is-active" : "");

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header-inner">
        <Link className="brand" to="/" aria-label="Prime Work">
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <span className="brand-name">Prime Work</span>
        </Link>

        <nav className="site-nav" aria-label="Sections">
          <NavLink to="/" end className={linkClass}>
            {dict.nav.home}
          </NavLink>
          <NavLink to="/release" className={linkClass}>
            {dict.nav.release}
          </NavLink>
          <NavLink to="/docs" className={linkClass}>
            {dict.nav.docs}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {dict.nav.about}
          </NavLink>
        </nav>

        <div className="header-actions">
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
          <a className="ghost-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/release" element={<ReleasePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
