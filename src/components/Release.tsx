import { useState } from "react";
import changelogData from "../data/changelog.json";
import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

interface ChangelogEntry {
  version: string;
  date?: string;
  items: string[];
}

/** 构建时由 scripts/fetch-changelog.mjs 从 GET /changelog 同步 */
const changelog = changelogData as ChangelogEntry[];
const INITIAL_VISIBLE = 4;

export function Release() {
  const { dict } = useI18n();
  const { release } = dict;
  const [showAll, setShowAll] = useState(false);

  const latest = changelog[0];
  const visible = showAll ? changelog : changelog.slice(0, INITIAL_VISIBLE);

  return (
    <section className="section section--content" id="release">
      <div className="section-inner">
        <div className="release-layout">
          <Reveal className="release-facts">
            <div className="release-fact">
              <span className="release-fact-label">{release.versionLabel}</span>
              <strong className="release-version">{latest ? latest.version : "—"}</strong>
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
            {visible.map((note, index) => (
              <Reveal
                className="release-item"
                delay={Math.min(index, 3) * 70}
                key={note.version}
              >
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

            {changelog.length > INITIAL_VISIBLE && (
              <button
                type="button"
                className="release-toggle"
                onClick={() => setShowAll((value) => !value)}
              >
                {showAll ? release.collapse : release.showAll}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
