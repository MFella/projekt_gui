import { Alignment } from "@blueprintjs/core/lib/esm/common";
import {
  Button,
  Icon,
  Menu,
  MenuDivider,
  MenuItem,
  Navbar,
  Switch
} from "@blueprintjs/core/lib/esm/components";
import AccountSelect from "./AccountSelect";
import styles from "./component.module.css";
import React from "react";
import { Classes, Popover2 } from "@blueprintjs/popover2";
import { useTheme } from "../ThemeContext";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const changeColorTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const getLanguage = () => {
    return i18n.language;
  };

  const settingsContent = (
    <div>
      <Menu>
        <Switch
          checked={theme === "dark"}
          label="Tryb ciemny"
          onChange={changeColorTheme}
        />
        <MenuItem text="Zmień język">
          <MenuItem
            icon={getLanguage() === "pl" ? "small-tick" : false}
            text="Polski"
            onClick={() => changeLanguageHandler("pl")}
          />
          <MenuItem
            icon={getLanguage() === "en" ? "small-tick" : false}
            text="Angielski"
            onClick={() => changeLanguageHandler("en")}
          />
        </MenuItem>
        <MenuDivider />
        <Button text="Wyloguj" fill={true} minimal={true} />
      </Menu>
    </div>
  );

  return (
    <Navbar className={styles.navbarStyle}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className={styles.colorWhite}>
          {t("title")}
        </Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <AccountSelect />
        <Navbar.Divider className={styles.backgroundColorWhite} />
        <Popover2
          interactionKind="hover"
          popoverClassName={Classes.POPOVER2_CONTENT_SIZING}
          placement="bottom-start"
          content={settingsContent}
          renderTarget={({ isOpen, ref, ...targetProps }) => (
            <Button
              {...targetProps}
              elementRef={ref as React.RefObject<HTMLButtonElement>}
              className="bp3-minimal"
            >
              <Icon className={styles.colorWhite} icon="cog" />
            </Button>
          )}
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default Topbar;
