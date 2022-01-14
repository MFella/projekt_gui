import {Alignment} from "@blueprintjs/core/lib/esm/common";
import {Button, Icon, Menu, MenuDivider, MenuItem, Navbar, Switch} from "@blueprintjs/core/lib/esm/components";
import AccountSelect from "../AccountSelect/AccountSelect";
import styles from "./style.module.css";
import React, {useState} from "react";
import {Classes, Popover2} from "@blueprintjs/popover2";
import {useTheme} from "../../ThemeContext";
import {useTranslation} from "react-i18next";
import AuthService from "../../service/AuthService";
import {useNavigate} from "react-router-dom";

export interface TopbarProps {
    isAuthorized: boolean;
    onUserChange?: (user: string) => void;
}

const Topbar = (props: TopbarProps) => {
    const {theme, setTheme} = useTheme();
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    const [user, setUser] = useState(props.isAuthorized ? AuthService.getCurrentUser() : "");
    const [userList, setUserList] = useState(props.isAuthorized ? AuthService.getUsersList() : []);
    const changeColorTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const changeLanguageHandler = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    const getLanguage = () => {
        return i18n.language;
    };

    const userChanged = (s: string) => {
        AuthService.saveUser(s);
        if (props.onUserChange) {
            props.onUserChange(s);
        }
    }

    const logout = () => {
        AuthService.deleteSession();
        navigate("/login");
    }

    const settingsContent = (
        <div>
            <Menu>
                <Switch
                    checked={theme === "dark"}
                    label={t("navbar.darkmode")}
                    onChange={changeColorTheme}
                />
                <MenuItem text={t("navbar.language")}>
                    <MenuItem
                        icon={getLanguage() === "pl" ? "small-tick" : false}
                        text={t("polish")}
                        onClick={() => changeLanguageHandler("pl")}
                    />
                    <MenuItem
                        icon={getLanguage() === "en" ? "small-tick" : false}
                        text={t("english")}
                        onClick={() => changeLanguageHandler("en")}
                    />
                </MenuItem>
                {props.isAuthorized && <>
                    <MenuDivider/>
                    <Button text={t("navbar.logout")} fill={true} minimal={true} onClick={logout}/>
                </>}
            </Menu>
        </div>
    );

    return (
        <Navbar className={styles.navbarStyle}>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading className={styles.colorWhite}>
                    {t("topbar.title")}
                </Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                {props.isAuthorized && <AccountSelect current={user} list={userList} onChange={userChanged}/>}
                <Navbar.Divider className={styles.backgroundColorWhite}/>
                <Popover2
                    interactionKind="hover"
                    popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
                    placement="bottom-start"
                    content={settingsContent}
                    renderTarget={({ref, ...targetProps}) => (
                        <Button
                            {...targetProps}
                            elementRef={ref as React.RefObject<HTMLButtonElement>}
                            className="bp3-minimal"
                        >
                            <Icon className={styles.colorWhite} icon="cog"/>
                        </Button>
                    )}
                />
            </Navbar.Group>
        </Navbar>
    );
};

export default Topbar;
