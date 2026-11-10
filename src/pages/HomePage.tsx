import { Link } from "react-router-dom";
import { Capabilities } from "../components/Capabilities";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { Workflow } from "../components/Workflow";
import { useI18n } from "../i18n";

export function HomePage() {
  const { dict } = useI18n();

  return (
    <>
      <Hero />
      <Capabilities />
      <Workflow />
      <section className="section section--tight" id="next">
        <div className="section-inner">
          <Reveal className="cta-block">
            <h2 className="cta-title">{dict.homeCta.title}</h2>
            <p className="cta-desc">{dict.homeCta.desc}</p>
            <div className="hero-actions cta-actions">
              <Link className="button-primary" to="/release">
                {dict.homeCta.primary}
              </Link>
              <Link className="button-ghost" to="/docs">
                {dict.homeCta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
