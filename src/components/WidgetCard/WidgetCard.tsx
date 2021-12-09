import { Button, Card, Elevation } from "@blueprintjs/core";
import styles from "./style.module.css";

export interface WidgetCardProps {
  title: string;
}

const WidgetCard = (props: WidgetCardProps) => {
  return (
    <div className={styles.container}>
      <Card elevation={Elevation.THREE} className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
      </Card>
    </div>
  );
};

export default WidgetCard;
