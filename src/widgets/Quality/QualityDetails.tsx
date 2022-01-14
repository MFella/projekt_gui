import { HotkeysProvider, Intent, Tag } from '@blueprintjs/core';
import { Cell, Column, Table, Table2 } from "@blueprintjs/table";
import React, { useState } from 'react';
import styles from "./style.module.css";

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
        <>
        <h3>Kategoria sprzedaży</h3>
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
            style={tagStyle}>{'Average'}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Good'}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Very good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Very good'}</Tag>
                        <Tag round={true} large={false} minimal={true}
            intent={props.category === 'Wonderful' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Wonderful'}</Tag>
            </div>
            <div className={styles.aspectsOverallContainer}>
                <div className={styles.aspectsContainer}>
                <h3>Najniżej oceniane aspekty</h3>  
                    <table style={{width: '100%'}} className=' bp3-html-table bp3-html-table-striped'>
                        <thead>
                            <tr>
                                <th>Aspekt</th>
                                <th>Ocena</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Obsługa klienta</td>
                                <td>{props.lowestAspects?.service}/100</td>
                            </tr>
                            <tr>
                                <td>Koszt dostawy</td>
                                <td>{props.lowestAspects?.deliveryCost}/100</td>
                            </tr>
                            <tr>
                                <td>Czas dostawy</td>
                                <td>{props.lowestAspects?.timeOfDelivery}/100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.overallContainer}>
                    <h3>Ogólna ocena jakości</h3>
                    <h2>{props.overallRatio?.rate}</h2>
                    <p>Brakuje <strong>{props.overallRatio?.leftToNext}</strong> punktów do kategori: </p>
                    <Tag round={true} large={false} minimal={true}>{props.category}</Tag>
                    
                </div>
            </div>
        </>
    )
};

export default QualityDetails