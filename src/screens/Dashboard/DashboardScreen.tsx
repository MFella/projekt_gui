import React, {useState} from "react";
import Topbar from "../../components/Topbar/Topbar";
import OrdersWidget from "../../widgets/Orders/OrdersWidget";
import QualityWidget from "../../widgets/Quality/QualityWidget";
import ChartWidget from "../../widgets/Chart/ChartWidget";
import styles from "./style.module.css";
import {CachePolicies, useFetch} from "use-http";
import AuthService from "../../service/AuthService";

const DashboardScreen = () => {
    const [currenUser, setCurrentUser] = useState(AuthService.getCurrentUser())
    return (
        <>
            <Topbar isAuthorized={true} onUserChange={(user) => setCurrentUser(user)}/>
            <div className={styles.container}>
                <OrdersWidget
                    currentUser={currenUser}
                />
                <QualityWidget
                    currentUser={currenUser}/>
                <ChartWidget
                    currentUser={currenUser}/>
            </div>

        </>
    );
}

export default DashboardScreen;