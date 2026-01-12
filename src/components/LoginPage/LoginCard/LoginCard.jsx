import styles from "./LoginCard.module.css";
import { Button } from "../../Button/Button";
import { InputField } from "../InputField/InputField";

export function LoginCard({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  onCancel,
}) {
  return (
    <div className={styles.loginCard}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="User name"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="UserName"
          classNames={styles}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********************"
          classNames={styles}
        />

        <div className={styles.buttonsRow}>
          <Button
            className={`${styles.btn} ${styles.btnPrimary}`}
            type="submit"
          >
            Submit
          </Button>

          <Button
            className={`${styles.btn} ${styles.btnSecondary}`}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
