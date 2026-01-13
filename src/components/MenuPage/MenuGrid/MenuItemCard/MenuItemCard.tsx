import { Button } from "../../../Button/Button";
import styles from "./MenuItemCard.module.css";

interface Meal {
  img: string;
  name: string;
  meal: string;
  price: number | string;
  id?: string | number;
}

interface MenuItemCardProps {
  meal: Meal;
  onAdd: () => void;
  count: number;
}

export function MenuItemCard({ meal, onAdd, count }: MenuItemCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={meal.img} alt={meal.name} />
      <div className={styles.descriptionCard}>
        <h4 className={styles.headerCard}>{meal.meal}</h4>
        <p className={styles.paragraphCard}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={styles.counterAndCartCard}>
          <span className={styles.counter}>{count || 0}</span>
          <Button className={styles.buttonCard} onClick={onAdd}>
            Add to cart
          </Button>
        </div>
      </div>
      <span className={styles.price}>${meal.price} USD</span>
    </div>
  );
}
