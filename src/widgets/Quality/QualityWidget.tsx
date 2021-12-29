import React from "react";
import { useTranslation } from "react-i18next";
import WidgetCard from "../../components/WidgetCard/WidgetCard";

const QualityWidget = () => {
  const { t, i18n } = useTranslation();
  return <WidgetCard title={t("widget.quality.title")} />;
};

export default QualityWidget;
