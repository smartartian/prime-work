import { Release } from "../components/Release";
import { useI18n } from "../i18n";
import { PageHeader } from "./PageHeader";

export function ReleasePage() {
  const { dict } = useI18n();

  return (
    <>
      <PageHeader
        label={dict.release.label}
        title={dict.release.title}
        desc={dict.release.desc}
      />
      <Release />
    </>
  );
}
