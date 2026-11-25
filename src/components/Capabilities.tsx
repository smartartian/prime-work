import { useI18n } from "../i18n";
import { Reveal } from "./Reveal";

const navItems = ["工作台", "站点导航", "页面菜单", "SSH 终端", "AI 助手"];

const plugins: Array<[string, boolean]> = [
  ["页面菜单", true],
  ["站点导航", true],
  ["SSH 终端", true],
  ["AI 助手", false],
];

/** 每张能力卡片底部的界面演示，让抽象能力有一个可看的落点 */
function CapabilityVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="capability-visual" aria-hidden="true">
        <div className="mock-workbench">
          <div className="mock-side">
            <span className="mock-side-group">工作台</span>
            {navItems.map((item, i) => (
              <span className={`mock-side-item${i === 3 ? " is-active" : ""}`} key={item}>
                <i />
                {item}
              </span>
            ))}
          </div>
          <div className="mock-main">
            <span className="mock-crumb">工作台 / 终端</span>
            <span className="mock-title">生产服务器</span>
            <div className="mock-lines">
              <i style={{ width: "72%" }} />
              <i style={{ width: "54%" }} />
              <i style={{ width: "64%" }} />
            </div>
            <div className="mock-tags">
              <span>会话 3</span>
              <span>主机 5</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="capability-visual" aria-hidden="true">
        <div className="mock-plugins">
          {plugins.map(([name, on]) => (
            <div className="mock-plugin" key={name}>
              <span>{name}</span>
              <span className={`mock-switch${on ? " is-on" : ""}`}>
                <i />
              </span>
            </div>
          ))}
        </div>
        <div className="mock-permission">首次启用需确认权限 · 停用即清理</div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="capability-visual" aria-hidden="true">
        <div className="mock-terminal">
          <div className="mock-term-head">
            <i />
            <i />
            <i />
            <span className="mock-term-tab">prod-01</span>
          </div>
          <div className="mock-term-body">
            <div>
              <span className="term-path">~/app</span>{" "}
              <span className="term-cmd">deploy --env prod</span>
            </div>
            <div className="term-dim">→ building image …</div>
            <div className="term-dim">→ pushing to registry …</div>
            <div className="term-ok">✓ released in 42s</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="capability-visual" aria-hidden="true">
      <div className="mock-ai">
        <div className="preview-msg preview-msg--user">检查一下部署状态</div>
        <div className="preview-msg preview-msg--ai">
          已连接 prod-01，最近一次发布成功，耗时 42 秒。
        </div>
        <div className="preview-command">
          <span className="preview-command-label">待确认命令</span>
          <code>docker compose ps</code>
          <span className="preview-command-actions">
            <i className="is-primary">执行</i>
            <i>取消</i>
          </span>
        </div>
      </div>
    </div>
  );
}

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
              <CapabilityVisual index={index} />
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
