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

//const tagStyle = 


const QualityDetails = (props: QualityDetailData) => {
    const {t, i18n} = useTranslation();
    const tagsData = [
        'Weak',
        'Average',
        'Good',
        'Very good',
        'Wonderful' 
    ];

    const tagStyle = {minWidth: '4rem', textAlign: 'center', margin: '1rem'} as React.CSSProperties;
    // should be used in template - doesnt work -> error from mock side XDD
    const getNextTag = (tagsData: Array<string> = [], tag: any) => {
        return tagsData[tagsData.findIndex(tag) + 1];
    }

    return (
        <div className={styles.qualityContainer} >
        <h3>{t("widget.quality.category")}</h3>
            <div className={styles.badgeRateContainer}>
                {/* {(tagsData.map((tag: any, k: React.Key | null | undefined) => {
            <Tag round={true} large={true} minimal={true}
            intent={props.category === tag.title ? Intent.SUCCESS : Intent.NONE} 
            style={{minWidth: '10rem', textAlign: 'center'}}>{tag.title}</Tag>
                }))} */}
                            <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Weak' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Weak'}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Average' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{t('Weak')}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{t('Good')}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Very good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{t('Verygood')}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Wonderful' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{t('Wonderful')}</Tag>
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
                    <Tag round={true} large={false} minimal={true}>{props.category}</Tag>
                    
                </div>
            </div>
        </div>
    )
};

export default QualityDetails