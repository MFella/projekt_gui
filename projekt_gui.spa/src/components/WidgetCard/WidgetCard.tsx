import React from "react";
import {Card, Elevation, H2} from "@blueprintjs/core";
import styles from "./style.module.css";

export interface WidgetCardProps {
    title: string;
    children?: React.ReactNode;
}

const WidgetCard = (props: WidgetCardProps) => {
    return (
        <div className={styles.container}>
            <Card elevation={Elevation.THREE} className={styles.card}>
                <H2 className={styles.title}>{props.title}</H2>
                {props.children}
            </Card>
        </div>
    );
};

export default WidgetCard;
