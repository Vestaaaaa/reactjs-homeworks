import { Button } from "../../Button/Button";
import { OrderLabel } from "../OrderLabel/OrderLabel";
import styles from "./OrderForm.module.css";

export function OrderForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const street = form.street.value;
    const house = form.house.value;

    onSubmit({ street, house });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <OrderLabel
        className={styles.label}
        name="street"
        inputClassName={styles.input}
      >
        Street
      </OrderLabel>

      <OrderLabel
        className={styles.label}
        name="house"
        inputClassName={styles.input}
      >
        House
      </OrderLabel>

      <Button type="submit" className={styles.orderBtn}>
        Order
      </Button>
    </form>
  );
}
