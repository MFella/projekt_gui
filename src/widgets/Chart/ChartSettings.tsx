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
import useFetch, { CachePolicies } from "use-http";

const ChartSettings = (props: any) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = useCallback(() => setIsOpen(!isOpen), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const MetricSelect = Select.ofType<IOption>();
  const ChartTypeSelect = Select.ofType<IOption>();
  const RangeSelect = Select.ofType<IOption>();
  const [metric, setMetric] = useState<IOption>(CHART_METRICS[0]);
  const [type, setType] = useState<IOption>(CHART_TYPE_OF_CHART[0]);
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

  return (
    <>
      <div className="settings-container" style={cogIconContainerStyle}>
        <AnchorButton onClick={handleButtonClick} rightIcon="cog" />
      </div>
      <Dialog
        className={theme === "dark" ? "bp3-dark" : ""}
        icon="info-sign"
        title={"Ustawienia"}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className={Classes.DIALOG_BODY}>
          <Card>
            <Label style={optionRowStyle}>
              <strong>Metric</strong>
              <div>
                <MetricSelect
                  items={CHART_METRICS}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text="No results." />}
                  onItemSelect={setMetric}
                >
                  <Button
                    text={"wybrana opcja"}
                    rightIcon="double-caret-vertical"
                  />
                </MetricSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>Type of chart</strong>
              <div>
                <ChartTypeSelect
                  items={CHART_TYPE_OF_CHART}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text="No results." />}
                  onItemSelect={setType}
                >
                  <Button
                    text={"wybrana opcja"}
                    rightIcon="double-caret-vertical"
                  />
                </ChartTypeSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>Range</strong>
              <div>
                <MetricSelect
                  items={CHART_RANGE}
                  itemPredicate={filterOption}
                  itemRenderer={renderOption}
                  noResults={<MenuItem disabled={true} text="No results." />}
                  onItemSelect={setRange}
                >
                  <Button
                    text={"wybrana opcja"}
                    rightIcon="double-caret-vertical"
                  />
                </MetricSelect>
              </div>
            </Label>
            <Label style={optionRowStyle}>
              <strong>Additional data serie</strong>
              <div>
                <Switch
                  checked={additionalSerie}
                  label={additionalSerie ? "On" : "Off"}
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
