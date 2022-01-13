import { AnchorButton, Spinner } from "@blueprintjs/core";
import ApexCharts from "apexcharts";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch, { CachePolicies } from "use-http";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import ChartSettings from "./ChartSettings";

const ChartWidget = () => {

  const [data, setData] = useState([]);

  const {
    get,
    response,
    loading
} = useFetch('/orders/chart/today' , {cachePolicy: CachePolicies.NO_CACHE}, [])

useEffect(() => {
    load();
}, [])

async function load() {
    const chartData = await get('')
    if (response.ok) setData(chartData)
    console.log('chartData', chartData);
}

  const options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }

  const chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();

  const { t, i18n } = useTranslation();


  return <WidgetCard title={t("widget.chart.title")}>
    <ChartSettings />
  <div className="chart-header-container">
  {loading ? <Spinner/> : (
    <div id="chart"></div>
  )}
  </div>
    <div className="chart-area-container">
    </div>
  </WidgetCard>;
};

export default ChartWidget;
