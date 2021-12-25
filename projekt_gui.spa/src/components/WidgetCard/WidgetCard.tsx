import { Card, Elevation } from "@blueprintjs/core";
import styles from "./style.module.css";

export interface WidgetCardProps {
  title: string;
  children?: React.ReactNode;
}

const WidgetCard = (props: WidgetCardProps) => {
  return (
    <div className={styles.container}>
      <Card elevation={Elevation.THREE} className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.children}
      </Card>
    </div>
  );
};

export default WidgetCard;
