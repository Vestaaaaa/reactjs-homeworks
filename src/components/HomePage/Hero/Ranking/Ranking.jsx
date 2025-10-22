import styles from "../../../../pages/HomePage/HomePage.module.css";

export function Ranking() {
  return (
    <div className={styles.ranking}>
      <img
        src="/src/assets/star.png"
        style={{ width: "25px", height: "25px" }}
      />
      <p style={{ fontWeight: "600" }}>Trustpilot</p>
    </div>
  );
}
