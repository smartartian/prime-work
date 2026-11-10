import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { AppPreview } from "./AppPreview";

export function Hero() {
  const { dict } = useI18n();

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <p className="eyebrow hero-rise" style={{ animationDelay: "60ms" }}>
          {dict.hero.eyebrow}
        </p>
        <h1 className="hero-title hero-rise" style={{ animationDelay: "140ms" }}>
          {dict.hero.title}
        </h1>
        <p className="hero-desc hero-rise" style={{ animationDelay: "220ms" }}>
          {dict.hero.desc}
        </p>
        <div className="hero-actions hero-rise" style={{ animationDelay: "300ms" }}>
          <a className="button-primary" href="#capabilities">
            {dict.hero.primary}
            <span className="button-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <Link className="button-ghost" to="/docs">
            {dict.hero.secondary}
          </Link>
        </div>
        <ul className="hero-meta hero-rise" style={{ animationDelay: "380ms" }}>
          {dict.hero.meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual hero-rise" style={{ animationDelay: "460ms" }}>
        <AppPreview />
      </div>
    </section>
  );
}
