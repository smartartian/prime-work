import { Docs } from "../components/Docs";
import { useI18n } from "../i18n";
import { PageHeader } from "./PageHeader";

export function DocsPage() {
  const { dict } = useI18n();

  return (
    <>
      <PageHeader label={dict.docs.label} title={dict.docs.title} desc={dict.docs.desc} />
      <Docs />
    </>
  );
}
