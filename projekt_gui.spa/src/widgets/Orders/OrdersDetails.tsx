import React, {useCallback, useState} from "react";
import {Dialog} from "@blueprintjs/core/lib/esnext";
import {AnchorButton, Card, Classes, H2, H4, Label, Spinner} from "@blueprintjs/core";
import {useTheme} from "../../ThemeContext";
import {CachePolicies, useFetch} from "use-http";
import styles from "./style.module.css";
import {API_URL} from "../../App";


export interface OrderDetailsProps {
    title: string;
    link: string;
}

const OrdersDetails = (props: OrderDetailsProps) => {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = useCallback(() => setIsOpen(!isOpen), []);
    const handleClose = useCallback(() => setIsOpen(false), []);
    const {
        data,
        loading
    } = useFetch(API_URL + '/orders/details/' + props.link, {cachePolicy: CachePolicies.NO_CACHE}, [isOpen])
    return (
        <>
            <AnchorButton
                onClick={handleButtonClick}
                rightIcon="share"
                text={"Zobacz szczegóły"}
            />
            <Dialog className={theme === "dark" ? "bp3-dark" : ""} icon="info-sign" title={"Szczegóły: " + props.title}
                    isOpen={isOpen} onClose={handleClose}>
                <div className={Classes.DIALOG_BODY}>
                    {loading ? <Spinner/> : (
                        data.map((v: any, k: React.Key | null | undefined) =>
                            <Card key={k}>
                                <H4>Zamówienie: {v.id}</H4>
                                <Label>Opis: {v.description}</Label>
                                <Label>Data: {v.date}</Label>
                                <Label>Koszt: {v.total} PLN</Label>
                            </Card>
                        )
                    )}
                </div>
            </Dialog>
        </>
    );
}

export default OrdersDetails;