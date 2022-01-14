import { Spinner } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch, { CachePolicies } from "use-http";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import QualityDetails from "./QualityDetails";
import styles from "./style.module.css";

export interface QualityWidgetProps {
  currentUser: string
}

const QualityWidget = (props: QualityWidgetProps) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({category: '', lowestAspects: null, overallRatio: null});

  const {
    get,
    response,
    loading
  } = useFetch('/quality/', {cachePolicy: CachePolicies.NO_CACHE}, [props.currentUser])

  useEffect(() => {
      load()
  }, [])

  async function load() {
      const qualityData = await get('')
      if (response.ok) setData(qualityData)
  }
  return <WidgetCard title={t("widget.quality.title")}>
  {loading ? <Spinner className={styles.spinner}/> : (
    <QualityDetails category={data.category} lowestAspects={data.lowestAspects} overallRatio={data.overallRatio} />
  )}
  </WidgetCard>;
};

export default QualityWidget;
