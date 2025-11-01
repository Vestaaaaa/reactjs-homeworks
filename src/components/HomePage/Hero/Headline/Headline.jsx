import styles from "./Headline.module.css";

export function Headline() {
  return (
    <h1 className={styles.h1Hp}>
      Beautiful food & takeaway,{" "}
      <span className={styles.highlight}>delivered</span> to your door.
    </h1>
  );
}
