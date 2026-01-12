import styles from "./HomePage.module.css";
import { Button } from "../../components/Button/Button";
import { BackgroundImage } from "../../components/HomePage/Hero/BackgroundImage/BackgroundImage";
import { Headline } from "../../components/HomePage/Hero/Headline/Headline";
import { DescriptionText } from "../../components/HomePage/Hero/DescriptionText/DescriptionText";
import { Ranking } from "../../components/HomePage/Hero/Ranking/Ranking";
import { useFetch } from "../../hooks/useFetch";

function HomePage() {
  const fetchWithLog = useFetch();

  const handleTest = () => {
    fetchWithLog({
      url: "/fake-order",
      method: "POST",
      body: { items: ["pizza"], total: 20 },
    });
  };

  return (
    <div className={styles.homepageContainer}>
      <BackgroundImage />

      <div className={styles.mainContent}>
        <div>
          <Headline />
          <DescriptionText />
          <Button className={styles.orderButton} disabled>
            Place an Order
          </Button>

          <button onClick={handleTest}>Test our useFetch</button>

          <Ranking />
          <p className={styles.pUnderRanking}>
            <span className={styles.highlight}>4.8 out of 5 </span> based on
            2000+ reviews
          </p>
        </div>
        <img alt="Appetizing meal banner" src="/src/assets/main-img.png" />
      </div>
    </div>
  );
}

export default HomePage;
