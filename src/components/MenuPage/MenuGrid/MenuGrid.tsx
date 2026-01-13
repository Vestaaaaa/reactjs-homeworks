import styles from "./MenuGrid.module.css";
import { MenuItemCard } from "./MenuItemCard/MenuItemCard";

interface Meal {
  id: string | number;
  img: string;
  name: string;
  meal: string;
  price: number | string;
}

interface MenuGridProps {
  meals: Meal[];
  addToCart: (id: string | number) => void;
  cart: Record<string | number, number>;
}

export function MenuGrid({ meals, addToCart, cart }: MenuGridProps) {
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
