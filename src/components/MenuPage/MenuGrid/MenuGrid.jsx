import styles from "./MenuGrid.module.css";
import { MenuItemCard } from "./MenuItemCard/MenuItemCard";

export function MenuGrid({ meals, addToCart, cart }) {
  return (
    <div className={styles.menuGrid}>
      {meals.map((meal) => (
        <MenuItemCard
          key={meal.id}
          meal={meal}
          onAdd={() => addToCart(meal.id)}
          count={cart[meal.id] || 0}
        />
      ))}
    </div>
  );
}
