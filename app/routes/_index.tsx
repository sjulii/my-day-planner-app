import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("greeting")}</h1>
      <h2>{t("test")}</h2>
      <Link to="/activities">go to</Link>
    </>
  );
}
