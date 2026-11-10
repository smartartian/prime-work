import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

export function Release() {
  const { dict } = useI18n();
  const { release } = dict;

  return (
    <section className="section section--content" id="release">
      <div className="section-inner">
        <div className="release-layout">
          <Reveal className="release-facts">
            <div className="release-fact">
              <span className="release-fact-label">{release.versionLabel}</span>
              <strong className="release-version">{release.version}</strong>
            </div>
            <div className="release-fact">
              <span className="release-fact-label">{release.platformLabel}</span>
              <span className="release-fact-value">{release.platform}</span>
            </div>
            <div className="release-fact">
              <span className="release-fact-label">{release.statusLabel}</span>
              <span className="release-status">{release.status}</span>
            </div>
          </Reveal>

          <div className="release-notes">
            <h3 className="release-notes-title">{release.notesTitle}</h3>
            {release.notes.map((note, index) => (
              <Reveal className="release-item" delay={index * 70} key={note.version}>
                <div className="release-item-head">
                  <strong>v{note.version}</strong>
                  {note.date && <span className="release-date">{note.date}</span>}
                </div>
                <ul className="release-item-list">
                  {note.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
