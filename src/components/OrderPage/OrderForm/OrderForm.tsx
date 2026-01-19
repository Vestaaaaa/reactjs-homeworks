import { Button } from "../../Button/Button";
import { OrderLabel } from "../OrderLabel/OrderLabel";
import styles from "./OrderForm.module.css";

interface OrderFormProps {
  onSubmit: (data: { street: string; house: string }) => void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const street = formData.get("street") as string;
    const house = formData.get("house") as string;

    onSubmit({ street, house });
    e.currentTarget.reset();
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
