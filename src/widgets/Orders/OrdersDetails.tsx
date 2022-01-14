import React, {useCallback, useEffect, useState} from "react";
import {Dialog} from "@blueprintjs/core/lib/esnext";
import {AnchorButton, Card, Classes, H4, Label, Spinner} from "@blueprintjs/core";
import {useTheme} from "../../ThemeContext";
import {CachePolicies, useFetch} from "use-http";
import {useTranslation} from "react-i18next";


export interface OrderDetailsProps {
    title: string;
    link: string;
}

const OrdersDetails = (props: OrderDetailsProps) => {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const handleButtonClick = useCallback(() => setIsOpen(!isOpen), []);
    const handleClose = useCallback(() => setIsOpen(false), []);
    const {
        get,
        response,
        loading
    } = useFetch('/orders/details/' + props.link, {cachePolicy: CachePolicies.NO_CACHE}, [])

    useEffect(() => {
        if (isOpen) load()
    }, [isOpen]);

    const {t, i18n} = useTranslation();

    async function load() {
        const initialTodos = await get('')
        if (response.ok) setData(initialTodos)
    }

    return (
        <>
            <AnchorButton
                onClick={handleButtonClick}
                rightIcon="share"
                text={t("widget.orders.showdetails")}
            />
            <Dialog className={theme === "dark" ? "bp3-dark" : ""} icon="info-sign"
                    title={t("widget.orders.details") + props.title}
                    isOpen={isOpen} onClose={handleClose}>
                <div className={Classes.DIALOG_BODY}>
                    {loading ? <Spinner/> : (
                        data.map((v: any, k: React.Key | null | undefined) =>
                            <Card key={k}>
                                <H4>{t("widget.orders.order") + v.id}</H4>
                                <Label>{t("widget.orders.description") + v.description}</Label>
                                <Label>{t("widget.orders.date") + v.date}</Label>
                                <Label>{t("widget.orders.total") + v.total} PLN</Label>
                            </Card>
                        )
                    )}
                </div>
            </Dialog>
        </>
    );
}

export default OrdersDetails;