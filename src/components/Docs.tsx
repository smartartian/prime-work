import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

const GITHUB_URL = "https://github.com/smartartian/prime-work";

export function Docs() {
  const { dict } = useI18n();
  const { docs } = dict;

  return (
    <section className="section section--content" id="docs">
      <div className="section-inner">
        <div className="docs-layout">
          <div className="docs-main">
            <h3 className="docs-subtitle">{docs.quickTitle}</h3>
            <ol className="docs-steps">
              {docs.quickSteps.map((step, index) => (
                <Reveal as="li" className="docs-step" delay={index * 60} key={step.title}>
                  <span className="docs-step-number">{index + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="docs-side">
            <Reveal className="docs-plugin">
              <h3 className="docs-subtitle">{docs.pluginTitle}</h3>
              <p>{docs.pluginDesc}</p>
              <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Reveal>

            <Reveal className="docs-faq" delay={80}>
              <h3 className="docs-subtitle">{docs.faqTitle}</h3>
              {docs.faq.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
