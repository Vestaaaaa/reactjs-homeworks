import styles from "./CategoryButton.module.css";
import { Button } from "../../Button/Button";

export function CategoryButton({ meals, selectedCategory, onCategoryChange }) {
  const categories = [...new Set(meals.map((item) => item.category))];
  return (
    <div className={styles.categoryButtons}>
      {categories.map((cat) => (
        <Button
          key={cat}
          className={
            selectedCategory === cat
              ? `${styles["category-btn"]} ${styles.active}`
              : styles["category-btn"]
          }
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
