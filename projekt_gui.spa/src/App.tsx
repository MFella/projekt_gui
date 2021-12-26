import React from "react";
import LoginScreen from "./screens/Login/LoginScreen";
import {useTheme} from "./ThemeContext";
import {Navigate, Route, Routes} from "react-router-dom";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";
import AuthService from "./service/AuthService";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={["App", theme == "dark" ? "bp3-dark" : ""].join(" ")}>
            <Routes>
                <Route
                    path="/"
                    element={AuthService.isUserAuthenticated() ? <DashboardScreen/> :
                        <Navigate to={{pathname: "/login"}}/>}
                />
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="*" element={<Navigate to={{pathname: "/"}}/>}/>
            </Routes>
        </div>
    );
};

export default App;
