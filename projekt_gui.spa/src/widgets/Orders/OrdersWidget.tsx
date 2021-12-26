import React from "react";
import {useTranslation} from "react-i18next";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import OrdersItem from "./OrdersItem";
import {Intent} from "@blueprintjs/core";
import styles from "./style.module.css";

export interface OrdersWidgetProps {
    isLoading: boolean;
    currentUser: string;
    data: {
        unpaid: number;
        unsent: number;
        refund: number;
    } | undefined
}

const OrdersWidget = (props: OrdersWidgetProps) => {
    const {t, i18n} = useTranslation();
    return <WidgetCard title={t("widget.orders.title")}>
        <div className={styles.container}>
            <OrdersItem intent={Intent.SUCCESS} title={"Nieopłacone"} itemsNumber={props.data?.unpaid} link={"/"}
                        isLoading={props.isLoading}/>
            <OrdersItem intent={Intent.WARNING} title={"Niewysłane"} itemsNumber={props.data?.unsent} link={"/"}
                        isLoading={props.isLoading}/>
            <OrdersItem intent={Intent.DANGER} title={"Zwroty"} itemsNumber={props.data?.refund} link={"/"}
                        isLoading={props.isLoading}/>
        </div>
    </WidgetCard>;
};

export default OrdersWidget;
