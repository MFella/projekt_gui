import {
  AnchorButton,
  Button,
  Card,
  Classes,
  Dialog,
  H4,
  Label,
  MenuItem,
  Switch
} from "@blueprintjs/core";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext";
import React from "react";
import { Select } from "@blueprintjs/select";
import {
  CHART_METRICS,
  CHART_RANGE,
  CHART_TYPE_OF_CHART,
  filterOption,
  IOption,
  renderOption
} from "./options";
import {useTranslation} from "react-i18next";

const ChartSettings = (props: any) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const handleButtonClick = useCallback(() => setIsOpen(!isOpen), []);

  const MetricSelect = Select.ofType<IOption>();
  const ChartTypeSelect = Select.ofType<IOption>();
  const RangeSelect = Select.ofType<IOption>();
  const [metric, setMetric] = useState<IOption>(CHART_METRICS[0]);
  const [type, setType] = useState<IOption>(CHART_TYPE_OF_CHART[1]);
  const [range, setRange] = useState<IOption>(CHART_RANGE[0]);
  const [additionalSerie, setAdditionalSerie] = useState<boolean>(false);

  const cogIconContainerStyle = {
    textAlign: "right"
  } as React.CSSProperties;

  const optionRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } as React.CSSProperties;

  const handleMetricClick = (item: IOption) => {
    setMetric(item);
  }

  const handleTypeClick = (type: IOption) => {
    setType(type);
  }

  const handleRangeClick = (range: IOption) => {
    setRange(range);
  }

  const updateChart = () => {
    setIsOpen(false);
    props.updateChart(metric, type, range, additionalSerie, props.data);
  }

  const handleClose = useCallback(updateChart, [metric, type, range, additionalSerie, props.data]);

  return (
    <>
      <div className="settings-container" style={cogIconContainerStyle}>
        <AnchorButton onClick={handleButtonClick} rightIcon="cog" />
      </div>
      <Dialog
        className={theme === "dark" ? "bp3-dark" : ""}
        icon="info-sign"
        title={t("settings")}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className={Classes.DIALOG_BODY}>
          <Card>
            <Label style={optionRowStyle}>
              <strong>{t("widget.chart.metric")}</strong>
              <div>
                <MetricSelect
                  items={CHART_METRICS}
                  filterable={false}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text={t("widget.chart.noresult")} />}
                  onItemSelect={handleMetricClick}
                >
                  <Button
                    text={metric.heading}
                    rightIcon="double-caret-vertical"
                  />
                </MetricSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>{t("widget.chart.type")}</strong>
              <div>
                <ChartTypeSelect
                  items={CHART_TYPE_OF_CHART}
                  filterable={false}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text={t("widget.chart.noresult")}/>}
                  onItemSelect={handleTypeClick}
                >
                  <Button
                    text={type.heading}
                    rightIcon="double-caret-vertical"
                  />
                </ChartTypeSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>{t("widget.chart.range")}</strong>
              <div>
                <RangeSelect
                  items={CHART_RANGE}
                  filterable={false}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text={t("widget.chart.noresult")} />}
                  onItemSelect={handleRangeClick}
                >
                  <Button
                    text={range.heading}
                    rightIcon="double-caret-vertical"
                  />
                </RangeSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>{t("widget.chart.additional")}</strong>
              <div>
                <Switch
                  checked={additionalSerie}
                  label={additionalSerie ? t("On") : t("Off")}
                  onChange={() => setAdditionalSerie(!additionalSerie)}
                />
              </div>
            </Label>
          </Card>
        </div>
      </Dialog>
    </>
  );
};

export default ChartSettings;
