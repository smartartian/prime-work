/** 用界面本身当视觉锚点：还原主窗体的三段式布局 */
export function AppPreview() {
  const navItems = ["工作台", "站点导航", "页面菜单", "SSH 终端", "AI 助手"];
  const statCards = ["会话 3", "主机 5", "技能 4"];

  return (
    <div className="preview" aria-hidden="true">
      <div className="preview-glow" />
      <div className="preview-window">
        <div className="preview-bar">
          <span className="preview-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="preview-title">Prime Work</span>
          <span className="preview-spacer" />
        </div>

        <div className="preview-body">
          <aside className="preview-side">
            <div className="preview-side-brand">
              <span className="preview-logo">P</span>
              <span className="preview-side-name">Prime Work</span>
            </div>
            <div className="preview-side-group">工作台</div>
            {navItems.map((item, index) => (
              <div
                className={`preview-side-item${index === 3 ? " is-active" : ""}`}
                key={item}
              >
                <span className="preview-side-dot" />
                {item}
              </div>
            ))}
            <div className="preview-side-foot">
              <span className="preview-side-dot" />
              设置
            </div>
          </aside>

          <div className="preview-main">
            <div className="preview-main-head">
              <div>
                <div className="preview-crumb">工作台 / 终端</div>
                <div className="preview-h1">生产服务器</div>
              </div>
              <span className="preview-pill">已连接</span>
            </div>

            <div className="preview-stats">
              {statCards.map((item) => (
                <div className="preview-stat" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="preview-terminal">
              <div className="preview-tabs">
                <span className="preview-tab is-active">prod-01</span>
                <span className="preview-tab">prod-02</span>
                <span className="preview-tab-add">+</span>
              </div>
              <div className="preview-term-body">
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

          <aside className="preview-panel">
            <div className="preview-panel-head">
              <span className="preview-panel-title">AI 助手</span>
              <span className="preview-panel-mode">Agent</span>
            </div>
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
            <div className="preview-panel-input">追问或输入 / 调用技能…</div>
          </aside>
        </div>
      </div>
    </div>
  );
}
