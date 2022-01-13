import { MenuItem } from '@blueprintjs/core';
import { ItemPredicate, ItemRenderer } from '@blueprintjs/select';
import React from 'react';

export interface IOption {
    heading: string;
    value: number;
}


export const CHART_METRICS: Array<IOption> = [
    { heading: 'Selt items', value: 0 },
    { heading: 'Turnover', value: 1 }
];

export const CHART_TYPE_OF_CHART: Array<IOption> = [
    { heading: 'Bar chart', value: 0},
    { heading: 'Line chart', value: 1}
];

export const CHART_RANGE: Array<IOption> = [
    { heading: 'Today', value: 0},
    { heading: 'Current week', value: 1},
    { heading: 'Previous week', value: 2},
];

export const filterOption: ItemPredicate<IOption> = (query, option) => {
    return (
        `${option.value}. ${option.heading.toLowerCase()}`.indexOf(
          query.toLowerCase()
        ) >= 0
      );
};


function highlightText(text: string, query: string) {
    let lastIndex = 0;
    const words = query
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (words.length === 0) {
      return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const trueCondition = true;
    const tokens: React.ReactNode[] = [];
    while (trueCondition) {
      const match = regexp.exec(text);
      if (!match) {
        break;
      }
      const length = match[0].length;
      const before = text.slice(lastIndex, regexp.lastIndex - length);
      if (before.length > 0) {
        tokens.push(before);
      }
      lastIndex = regexp.lastIndex;
      tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
      tokens.push(rest);
    }
    return tokens;
  }

export const renderOption: ItemRenderer<IOption> = (option, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) return null;

    const text = `${option.value}. ${option.heading}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={option.heading.toString()}
            key={option.value}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    )
}

export const optionSelectProps = {
    itemPredicate: filterOption,
    itemRenderer: renderOption,
    metrics: CHART_METRICS,
    typeOfChart: CHART_TYPE_OF_CHART,
    range: CHART_RANGE,
  };
