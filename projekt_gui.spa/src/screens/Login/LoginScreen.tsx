import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Card, Elevation, FormGroup, H2, InputGroup} from "@blueprintjs/core";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./style.module.css";
import {Button} from "@blueprintjs/core/lib/esm/components";
import {useFetch} from "use-http";

const LoginScreen = () => {
    const {t, i18n} = useTranslation();
    const [usernameError, setUsernameError] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const {post, response, loading, error} = useFetch('http://localhost:3100')

    async function performLogin() {
        await post('/login', {"username": username, "password": password})
        if (response.ok) {
            console.log("fefwefw")
        }
    }

    const inputClassname = (error: string) => error ? "bp3-intent-danger" : ""

    const validateInputs = () => {
        if (!password) {
            setPasswordError("Podaj swoje hasło");
        }
        if (!username) {
            setUsernameError("Podaj swoją nazwę użytkownika")
        }
        return (username && password);
    }

    const loginClicked = () => {
        if(validateInputs()){
            performLogin();
        }
    }

    const lockButton = (
        <Button
            icon={showPassword ? "unlock" : "lock"}
            minimal={true}
            onClick={() => setShowPassword(!showPassword)}
        />
    );

    return (
        <>
            <Topbar isAuthorized={false}/>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <H2 className={styles.title}>Logowanie</H2>
                    <Card elevation={Elevation.THREE} className={styles.card}>
                        <FormGroup
                            className={inputClassname(usernameError)}
                            label={"Nazwa użytkownika"}
                            labelFor="username-input"
                            helperText={usernameError}
                        >
                            <InputGroup
                                id="username-input"
                                className={inputClassname(usernameError)}
                                onChange={(e) => {
                                    setUsernameError("");
                                    setUsername(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup
                            className={inputClassname(usernameError)}
                            label={"Hasło"}
                            labelFor="password-input"
                            helperText={passwordError}
                        >
                            <InputGroup
                                id="password-input"
                                className={inputClassname(passwordError)}
                                rightElement={lockButton}
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => {
                                    setPasswordError("");
                                    setPassword(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button
                            className={["bp3-intent-primary", styles.loginButton].join(" ")}
                            fill={true}
                            onClick={loginClicked}
                            loading={loading}>Zaloguj</Button>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default LoginScreen;
