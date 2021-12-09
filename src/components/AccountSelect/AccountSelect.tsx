import { Icon } from "@blueprintjs/core";
import styles from "./style.module.css";
import React from "react";

const AccountSelect = () => {
  return (
    <div className={["bp3-html-select", styles.container].join(" ")}>
      <select defaultValue="1">
        <option value="1">Konto 1</option>
        <option value="1">Konto 2</option>
        <option value="2">Konto 3</option>
      </select>
      <Icon icon="caret-down" />
    </div>
  );
};

export default AccountSelect;
