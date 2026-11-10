import { About } from "../components/About";
import { useI18n } from "../i18n";
import { PageHeader } from "./PageHeader";

export function AboutPage() {
  const { dict } = useI18n();

  return (
    <>
      <PageHeader label={dict.about.label} title={dict.about.title} desc={dict.about.desc} />
      <About />
    </>
  );
}
