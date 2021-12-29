import {Icon} from "@blueprintjs/core";
import styles from "./style.module.css";
import React from "react";

export interface AccountSelectProps {
    current: string;
    list: string[];
    onChange: (s: string) => void
}

const AccountSelect = (props: AccountSelectProps) => {
    return (
        <div className={["bp3-html-select", styles.container].join(" ")}>
            <select defaultValue={props.current} onChange={(e) => {
                props.onChange(e.target.value)
            }}>
                {props.list.map((v, k) => <option key={k} value={v}>{v}</option>)}
            </select>
            <Icon icon="caret-down"/>
        </div>
    );
};

export default AccountSelect;
