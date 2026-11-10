import type { ReactNode } from "react";
import { Reveal } from "../components/Reveal";

interface PageHeaderProps {
  label: string;
  title: string;
  desc?: string;
  children?: ReactNode;
}

/** 子页统一页头：眉标 + 主标题 + 一句说明 */
export function PageHeader({ label, title, desc, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="section-inner">
        <Reveal className="page-header-copy">
          <p className="eyebrow">{label}</p>
          <h1 className="page-title">{title}</h1>
          {desc && <p className="page-desc">{desc}</p>}
          {children}
        </Reveal>
      </div>
    </header>
  );
}
