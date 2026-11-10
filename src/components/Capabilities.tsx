import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Capabilities() {
  const { dict } = useI18n();

  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="eyebrow">{dict.capabilities.label}</p>
          <h2 className="section-title">{dict.capabilities.title}</h2>
          <p className="section-desc">{dict.capabilities.desc}</p>
        </Reveal>

        <div className="capability-list">
          {dict.capabilities.items.map((item, index) => (
            <Reveal
              as="article"
              className="capability"
              delay={index * 70}
              key={item.title}
            >
              <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="capability-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <ul className="capability-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
