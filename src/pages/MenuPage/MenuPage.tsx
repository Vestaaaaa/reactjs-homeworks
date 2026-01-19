import { useEffect, useState } from "react";
import styles from "./MenuPage.module.css";
import { Headline } from "../../components/MenuPage/Headline/Headline.js";
import { DescriptionText } from "../../components/MenuPage/DescriptionText/DescriptionText.js";
import { CategoryButton } from "../../components/MenuPage/CategoryButton/CategoryButton.js";
import { MenuGrid } from "../../components/MenuPage/MenuGrid/MenuGrid.js";
import { Button } from "../../components/Button/Button.js";

interface Meal {
  id: string | number;
  img: string;
  name: string;
  meal: string;
  price: number | string;
  category: string;
}

const PAGE_SIZE = 6;

export function MenuPage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [visibleMeals, setVisibleMeals] = useState(PAGE_SIZE);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res): Promise<Meal[]> => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Meal[]) => {
        setMeals(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  const addToCart = (id: string | number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSeeMore = () => {
    setVisibleMeals((prev) => prev + PAGE_SIZE);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleMeals(PAGE_SIZE);
  };

  const filteredMeals = meals.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className={styles.menuPage}>
      <Headline />
      <DescriptionText />
      {error && <div className="error">Ошибка загрузки данных: {error}</div>}
      <CategoryButton
        meals={meals}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <MenuGrid
        meals={filteredMeals.slice(0, visibleMeals)}
        addToCart={addToCart}
        cart={cart}
      />
      {visibleMeals < filteredMeals.length && (
        <Button className={styles.seeMoreButton} onClick={handleSeeMore}>
          See more
        </Button>
      )}
    </div>
  );
}
