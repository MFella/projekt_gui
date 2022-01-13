import { Intent, Tag } from '@blueprintjs/core';
import React, { useState } from 'react';

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
        { title: 'Weak' },
        { title: 'Average' },
        { title: 'Good' },
        { title: 'Very good' },
        { title: 'Wonderful' }
    ];

    const tagStyle = {minWidth: '4rem', textAlign: 'center', margin: '1rem'} as React.CSSProperties;

    const badgeContainerStyle = {minHeight: '2rem', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'};
    return (
        <>
        <h3>Kategoria sprzedaży</h3>
            <div className="badge-rate-container" style={badgeContainerStyle}>
                {/* {(tagsData.map((tag: any, k: React.Key | null | undefined) => {
            <Tag round={true} large={true} minimal={true}
            intent={props.category === tag.title ? Intent.SUCCESS : Intent.NONE} 
            style={{minWidth: '10rem', textAlign: 'center'}}>{tag.title}</Tag>
                }))} */}
                            <Tag round={true} large={true} minimal={true}
            intent={props.category === 'Weak' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Weak'}</Tag>
                        <Tag round={true} large={true} minimal={true}
            intent={props.category === 'Average' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Average'}</Tag>
                        <Tag round={true} large={true} minimal={true}
            intent={props.category === 'Good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Good'}</Tag>
                        <Tag round={true} large={true} minimal={true}
            intent={props.category === 'Very good' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Very good'}</Tag>
                        <Tag round={true} large={true} minimal={true}
            intent={props.category === 'Wonderful' ? Intent.SUCCESS : Intent.NONE} 
            style={tagStyle}>{'Wonderful'}</Tag>
            </div>
        </>
    )
};

export default QualityDetails