import React from "react";
import {useTranslation} from "react-i18next";
import {AnchorButton, H2, Intent, Spinner, Tag} from "@blueprintjs/core";
import styles from "./style.module.css";
import OrdersDetails from "./OrdersDetails";

export interface OrdersItemProps {
    intent: Intent;
    title: string;
    itemsNumber?: number;
    link: string
    isLoading: boolean;
}

const OrdersItem = (props: OrdersItemProps) => {
    const {t, i18n} = useTranslation();
    return (
        <div className={styles.itemContainer}>
            <Tag round={true} large={true} minimal={true} style={{width: "150px", textAlign: "center"}}
                 intent={props.intent} >{props.title}</Tag>
            {props.isLoading ? <Spinner size={42}/> : <H2>{props.itemsNumber}</H2>}
            <OrdersDetails title={props.title} link={props.link}/>
        </div>
    );
};

export default OrdersItem;
