import React from "react";
import { useTranslation } from "react-i18next";
import WidgetCard from "../../components/WidgetCard/WidgetCard";

const OrdersWidget = () => {
  const { t, i18n } = useTranslation();
  return <WidgetCard title={t("widget.orders.title")} />;
};

export default OrdersWidget;
