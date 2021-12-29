import React from "react";
import { useTranslation } from "react-i18next";
import WidgetCard from "../../components/WidgetCard/WidgetCard";

const ChartWidget = () => {
  const { t, i18n } = useTranslation();
  return <WidgetCard title={t("widget.chart.title")} />;
};

export default ChartWidget;
