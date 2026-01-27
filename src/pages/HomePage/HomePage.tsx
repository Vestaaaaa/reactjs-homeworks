import styles from "./HomePage.module.css";
import { Button } from "../../components/Button/Button";
import { BackgroundImage } from "../../components/HomePage/Hero/BackgroundImage/BackgroundImage";
import { Headline } from "../../components/HomePage/Hero/Headline/Headline";
import { DescriptionText } from "../../components/HomePage/Hero/DescriptionText/DescriptionText";
import { Ranking } from "../../components/HomePage/Hero/Ranking/Ranking";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../context/LanguageContext";

export function HomePage() {
  const fetchWithLog = useFetch();
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  const handlePlaceOrder = () => {
    navigate("/order");
  };

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
          <Button className={styles.orderButton} onClick={handlePlaceOrder}>
            {t("homePage.textButton")}
          </Button>

          <Ranking />
          <p className={styles.pUnderRanking}>
            <span className={styles.highlight}>{t("homePage.ranking1")}</span>{" "}
            {t("homePage.ranking2")}
          </p>
        </div>
        <img alt="Appetizing meal banner" src="/src/assets/main-img.png" />
      </div>
    </div>
  );
}

export default HomePage;
