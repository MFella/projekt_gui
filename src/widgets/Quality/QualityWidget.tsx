import { Spinner } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch, { CachePolicies } from "use-http";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import QualityDetails from "./QualityDetails";

const QualityWidget = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({category: '', lowestAspects: null, overallRatio: null});

  const {
    get,
    response,
    loading
  } = useFetch('/quality/', {cachePolicy: CachePolicies.NO_CACHE}, [])

  useEffect(() => {
      load()
  }, [])

  async function load() {
      const qualityData = await get('')
      if (response.ok) setData(qualityData)
  }
  return <WidgetCard title={t("widget.quality.title")}> 
  {loading ? <Spinner /> : (
    <QualityDetails category={data.category} lowestAspects={data.lowestAspects} overallRatio={data.overallRatio} />
  )}
  </WidgetCard>;
};

export default QualityWidget;
