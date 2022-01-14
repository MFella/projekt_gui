import React from "react";
import {useTranslation} from "react-i18next";
import WidgetCard from "../../components/WidgetCard/WidgetCard";
import OrdersItem from "./OrdersItem";
import {Intent} from "@blueprintjs/core";
import styles from "./style.module.css";
import {CachePolicies, useFetch} from "use-http";

export interface OrdersWidgetProps {
    currentUser: string;
}

const OrdersWidget = (props: OrdersWidgetProps) => {
    const {t, i18n} = useTranslation();
    const {
        loading,
        data
    } = useFetch('/orders/' + props.currentUser, {cachePolicy: CachePolicies.NO_CACHE}, [props.currentUser])
    return <WidgetCard title={t("widget.orders.title")}>
        <div className={styles.container}>
            <OrdersItem intent={Intent.SUCCESS} title={t("widget.orders.unpaid")} itemsNumber={data?.unpaid}
                        link={"unpaid/" + props.currentUser}
                        isLoading={loading}/>
            <OrdersItem intent={Intent.WARNING} title={t("widget.orders.unsent")} itemsNumber={data?.unsent}
                        link={"unsent/" + props.currentUser}
                        isLoading={loading}/>
            <OrdersItem intent={Intent.DANGER} title={t("widget.orders.refund")} itemsNumber={data?.refund}
                        link={"refund/" + props.currentUser}
                        isLoading={loading}/>
        </div>
    </WidgetCard>;
};

export default OrdersWidget;
