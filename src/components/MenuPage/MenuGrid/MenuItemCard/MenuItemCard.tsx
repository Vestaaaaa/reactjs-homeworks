import { useSelector } from "react-redux";
import { Button } from "../../../Button/Button";
import styles from "./MenuItemCard.module.css";
import { RootState } from "../../../../store/store";

interface Meal {
  id: string | number;
  img: string;
  name: string;
  meal: string;
  price: number | string;
  category: string;
}

interface MenuItemCardProps {
  meal: Meal;
  onAdd: () => void;
}

export function MenuItemCard({ meal, onAdd }: MenuItemCardProps) {
  const count = useSelector((state: RootState) => {
    const cartItem = state.cart.items.find(
      (item) => item.id === Number(meal.id),
    );
    return cartItem ? cartItem.quantity : 0;
  });

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
          {count > 0 && <span className={styles.counter}>{count}</span>}
          <Button className={styles.buttonCard} onClick={onAdd}>
            Add to cart
          </Button>
        </div>
      </div>
      <span className={styles.price}>${meal.price} USD</span>
    </div>
  );
}
