import { HotkeysProvider, Intent, Tag } from '@blueprintjs/core';
import { Cell, Column, Table, Table2 } from "@blueprintjs/table";
import React, { useState } from 'react';
import styles from "./style.module.css";
import {useTranslation} from "react-i18next";


export interface LowestAspects {
    service: number,
    deliveryCost: number,
    timeOfDelivery: number
}

export interface OverallRatio {
    rate: number;
    leftToNext: number;
    nextCategory: string;
}

export interface QualityDetailData {
    category?: string,
    lowestAspects?: LowestAspects | null,
    overallRatio?: OverallRatio | null
}

const tagsData = [
    'Weak',
    'Average',
    'Good',
    'Verygood',
    'Wonderful'
];

const QualityDetails = (props: QualityDetailData) => {
    const {t, i18n} = useTranslation();
    const tagStyle = {minWidth: '4rem', textAlign: 'center', margin: '1rem'} as React.CSSProperties;
    const getNextTag = (tagsData: Array<string> = [], tag: string) => {
        return tagsData[tagsData.findIndex((el) => {return el === tag}) + 1];
    }

    return (
        <div className={styles.qualityContainer} >
        <h3>{t("widget.quality.category")}</h3>
            <div className={styles.badgeRateContainer}>
                {(tagsData.map((tag: any, k: number) => {
            return <Tag key={k} round={true} large={true} minimal={true}
            intent={props.category === tag ? Intent.SUCCESS : Intent.NONE}
                        style={tagStyle}>{t(tagsData[k])}</Tag>}))}
            </div>
            <div className={styles.aspectsOverallContainer}>
                <div className={styles.aspectsContainer}>
                <h3>{t("widget.quality.lowest")}</h3>
                    <table style={{ marginRight: "20px"}} className=' bp3-html-table bp3-html-table-striped'>
                        <thead>
                            <tr>
                                <th>{t("widget.quality.aspect")}</th>
                                <th>{t("widget.quality.rate")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{t("widget.quality.customerservice")}</td>
                                <td>{props.lowestAspects?.service}/100</td>
                            </tr>
                            <tr>
                                <td>{t("widget.quality.shippingprice")}</td>
                                <td>{props.lowestAspects?.deliveryCost}/100</td>
                            </tr>
                            <tr>
                                <td>{t("widget.quality.shippingtime")}</td>
                                <td>{props.lowestAspects?.timeOfDelivery}/100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.overallContainer}>
                    <h3>{t("widget.quality.total")}</h3>
                    <h2>{props.overallRatio?.rate}</h2>
                    <p>{t("widget.quality.pointsleft")}<strong>{props.overallRatio?.leftToNext}</strong>{t("widget.quality.left")}</p>
                    {props.category &&
                        <Tag round={true} large={true} minimal={true}>
                            {t(getNextTag(tagsData, props.category).toString())}
                        </Tag>
                    }
                </div>
            </div>
        </div>
    )
};

export default QualityDetails