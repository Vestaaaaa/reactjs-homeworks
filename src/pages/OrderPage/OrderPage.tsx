import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeItem, clearCart } from "../../store/cartSlice";
import styles from "./OrderPage.module.css";
import { OrderItem } from "../../components/OrderPage/OrderItem/OrderItem.js";
import { OrderForm } from "../../components/OrderPage/OrderForm/OrderForm.js";
import { RootState } from "../../store/store.js";

export function OrderPage() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleOrder = ({
    street,
    house,
  }: {
    street: string;
    house: string;
  }) => {
    alert(`Order placed! Street: ${street}, house: ${house}`);
    dispatch(clearCart());
  };

  return (
    <div className={styles.orderPage}>
      <h1 className={styles.title}>Finish your order</h1>

      <div className={styles.list}>
        {items.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            onQuantityChange={(quantity: number) =>
              dispatch(
                changeQuantity({
                  id: item.id,
                  quantity,
                })
              )
            }
            onRemove={() => dispatch(removeItem(item.id))}
          />
        ))}
      </div>

      <div className={styles.bottomBlock}>
        <OrderForm onSubmit={handleOrder} />
      </div>
    </div>
  );
}
