import { useState } from "react";
import styles from "./CategoryButton.module.css";

const categories = ["Dessert", "Dinner", "Breakfast"];

export function CategoryButton() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.categoryButtons}>
      {categories.map((label, index) => (
        <button
          key={label}
          className={
            index === activeIndex
              ? `${styles["category-btn"]} ${styles.active}`
              : styles["category-btn"]
          }
          onClick={() => setActiveIndex(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
