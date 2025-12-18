import { Button } from "../../Button/Button";
import styles from "./OrderItem.module.css";

export function OrderItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.info}>
        <p className={styles.name}>{item.title}</p>
      </div>

      <div className={styles.price}>${item.price.toFixed(2)} USD</div>

      <input
        type="number"
        min="1"
        className={styles.quantity}
        value={item.quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
      />

      <Button className={styles.removeBtn} onClick={onRemove}>
        X
      </Button>
    </div>
  );
}
