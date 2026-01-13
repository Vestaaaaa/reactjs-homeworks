import styles from "./DescriptionText.module.css";

export function DescriptionText() {
  return (
    <p className={styles.description}>
      Use our menu to place an order online, or{" "}
      <span title="+375 33 377 61 72" style={{ color: "#35B8BE" }}>
        phone
      </span>{" "}
      our store to place a pickup order. Fast and fresh food.
    </p>
  );
}
