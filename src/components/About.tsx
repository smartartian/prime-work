import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

const GITHUB_URL = "https://github.com/smartartian/prime-work";

export function About() {
  const { dict } = useI18n();
  const { about } = dict;

  return (
    <section className="section section--content section--last" id="about">
      <div className="section-inner">
        <div className="about-layout">
          <Reveal className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p className="about-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="about-side" delay={90}>
            <div className="about-block">
              <h3 className="docs-subtitle">{about.stackTitle}</h3>
              <ul className="stack-list">
                {about.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-block">
              <h3 className="docs-subtitle">{about.contactTitle}</h3>
              <p>{about.contactDesc}</p>
              <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                {about.contactAction}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
