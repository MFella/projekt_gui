import {Spinner} from "@blueprintjs/core";
import React, {useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import useFetch, {CachePolicies} from "use-http";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import ChartSettings from "./ChartSettings";
import {CHART_METRICS, CHART_RANGE, CHART_TYPE_OF_CHART, IOption} from "./options";
import ReactApexChart from "react-apexcharts";
import styles from "./style.module.css";

export interface ChartWidgetProps {
    currentUser: string
}

const ChartWidget = (props: ChartWidgetProps) => {

    const [data, setData] = useState([]);
    const [metric, setMetric] = useState<IOption>(CHART_METRICS[0]);
    const [type, setType] = useState<IOption>(CHART_TYPE_OF_CHART[1]);
    const [range, setRange] = useState<IOption>(CHART_RANGE[0]);

    const {
        get,
        response,
        loading
    } = useFetch('/orders/chart/', {cachePolicy: CachePolicies.NO_CACHE}, [props.currentUser])

    useEffect(() => {
        load();
    }, [])
    const {t, i18n} = useTranslation();

    async function load() {
        const chartData = await get('')
        if (response.ok) {
            setData(chartData);
            const chartOptions = getOptions(metric, type, range, false, chartData);
            setChartOptions(chartOptions);
        }
    }

    const [chartOptions, setChartOptions] = useState({series: []});


    const getOptions = (metric: IOption, type: IOption, range: IOption, additionalData: boolean, data: any) => {
        const dataToDisplay = data.filter((entity: any) => {
            return entity.metric === metric.heading
        });

        const singleSerie = [{
            name: range.heading,
            data: [...(dataToDisplay[range.value].serie_1).map((measure: IOption) => measure.value)]
        }];

        const doubleSerie = [{
            name: range.heading,
            data: [...(dataToDisplay[range.value].serie_1).map((measure: IOption) => measure.value)]
        }, {
            name: '(Additional)' + range.heading,
            data: [...(dataToDisplay[range.value].serie_2).map((measure: IOption) => measure.value)]
        }];

        return {
            title: {
                text: metric.heading
            },
            chart: {
                type: type.value === 0 ? 'bar' : 'line',
            },
            xaxis: {
                categories: [...(dataToDisplay[range.value].serie_1).map((measure: any) => measure.period)]
            },
            series: additionalData ? doubleSerie : singleSerie
        } as any;
    }

    const updateNewChart = useCallback((metric: IOption, type: IOption, range: IOption, additionalSerie: boolean, data: any) => {

        const pipedData = getOptions(metric, type, range, additionalSerie, data);

        setChartOptions(pipedData);
        setType(type);
        setMetric(metric);
        setRange(range);
    }, [type, chartOptions, metric])


    return <WidgetCard title={t("widget.chart.title")}>
        <ChartSettings updateChart={updateNewChart} data={data}/>
        <div className="chart-header-container">
            {loading ? <Spinner className={styles.spinner}/> : (
                type.value === 1 ?
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        type={'line'}
                        height={'500px'}
                    /> : <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        type={'bar'}
                        height={'500px'}
                    />

            )}
        </div>
        <div className="chart-area-container">
        </div>

    </WidgetCard>;

};

export default ChartWidget;
