import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import { AppPreview } from "./AppPreview";

export function Hero() {
  const { dict } = useI18n();

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <h1 className="hero-title hero-rise" style={{ animationDelay: "60ms" }}>
          Prime Work
        </h1>
        <p className="hero-tagline hero-rise" style={{ animationDelay: "140ms" }}>
          {dict.hero.title}
        </p>
        <p className="hero-desc hero-rise" style={{ animationDelay: "200ms" }}>
          {dict.hero.desc}
        </p>
        <div className="hero-actions hero-rise" style={{ animationDelay: "260ms" }}>
          <a className="button-primary" href="#capabilities">
            {dict.hero.primary}
            <span className="button-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
          <Link className="button-ghost" to="/docs">
            {dict.hero.secondary}
          </Link>
        </div>
        <ul className="hero-meta hero-rise" style={{ animationDelay: "320ms" }}>
          {dict.hero.meta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual hero-rise" style={{ animationDelay: "400ms" }}>
        <AppPreview />
      </div>
    </section>
  );
}
