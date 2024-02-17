import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("new_activity")}</h1>
      <h2>this is me</h2>
    </>
  );
}
