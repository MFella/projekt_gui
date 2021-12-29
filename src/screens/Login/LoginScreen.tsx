import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Card, Elevation, FormGroup, H2, InputGroup, Intent} from "@blueprintjs/core";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./style.module.css";
import {Button} from "@blueprintjs/core/lib/esm/components";
import {useFetch} from "use-http";
import {useNavigate} from "react-router-dom";
import AuthService from "../../service/AuthService";

const LoginScreen = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const [usernameError, setUsernameError] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {post, response, loading} = useFetch('')

    async function performLogin() {
        const body = await post('/login', {"username": username, "password": password})
        if (response.ok) {
            AuthService.saveToken(body.token);
            AuthService.saveUser(body.users[0]);
            AuthService.saveUserList(body.users);
            while (!AuthService.isUserAuthenticated()) {
                //
            }
            navigate("/");
            return;
        }
        if (response.status == 401) {
            setPasswordError("Niepoprawna nazwa użytkownika lub hasło.")
            return;
        }
        setPasswordError("Wystąpił błąd.")
    }

    const intent = (error: string): Intent => error ? Intent.DANGER : Intent.NONE

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
        if (validateInputs()) {
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
                            intent={intent(usernameError)}
                            label={"Nazwa użytkownika"}
                            labelFor="username-input"
                            helperText={usernameError}
                        >
                            <InputGroup
                                id="username-input"
                                intent={intent(usernameError)}
                                onChange={(e) => {
                                    setUsernameError("");
                                    setUsername(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup
                            intent={intent(passwordError)}
                            label={"Hasło"}
                            labelFor="password-input"
                            helperText={passwordError}
                        >
                            <InputGroup
                                id="password-input"
                                intent={intent(passwordError)}
                                rightElement={lockButton}
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => {
                                    setPasswordError("");
                                    setPassword(e.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button

                            className={styles.loginButton}
                            intent={Intent.PRIMARY}
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
