import styles from "./MenuGrid.module.css";
import { MenuItemCard } from "./MenuItemCard/MenuItemCard";

export interface Meal {
  id: string | number;
  img: string;
  name: string;
  meal: string;
  price: number | string;
  category: string;
}

interface MenuGridProps {
  meals: Meal[];
  addToCart: (meal: Meal) => void;
}

export function MenuGrid({ meals, addToCart }: MenuGridProps) {
  return (
    <div className={styles.menuGrid}>
      {meals.map((meal) => (
        <MenuItemCard key={meal.id} meal={meal} onAdd={() => addToCart(meal)} />
      ))}
    </div>
  );
}
