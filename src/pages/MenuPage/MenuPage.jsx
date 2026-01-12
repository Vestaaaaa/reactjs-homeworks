import { useEffect, useState } from "react";
import styles from "./MenuPage.module.css";
import { Headline } from "../../components/MenuPage/Headline/Headline";
import { DescriptionText } from "../../components/MenuPage/DescriptionText/DescriptionText";
import { CategoryButton } from "../../components/MenuPage/CategoryButton/CategoryButton";
import { MenuGrid } from "../../components/MenuPage/MenuGrid/MenuGrid";
import { Button } from "../../components/Button/Button";

const PAGE_SIZE = 6;

export function MenuPage() {
  const [meals, setMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState(PAGE_SIZE);
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMeals(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleSeeMore = () => {
    setVisibleMeals((prev) => prev + PAGE_SIZE);
  };

  const handleCategoryChange = (category) => {
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
