import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Workflow() {
  const { dict } = useI18n();

  return (
    <section className="section section--tight" id="workflow">
      <div className="section-inner">
        <div className="workflow-grid">
          <Reveal className="workflow-intro">
            <p className="eyebrow">{dict.workflow.label}</p>
            <h2 className="section-title">{dict.workflow.title}</h2>
          </Reveal>

          <div className="workflow-steps">
            {dict.workflow.steps.map((step, index) => (
              <Reveal className="workflow-step" delay={index * 90} key={step.title}>
                <span className="workflow-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
