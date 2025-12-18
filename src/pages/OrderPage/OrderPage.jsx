import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeItem, clearCart } from "../../store/cartSlice";
import styles from "./OrderPage.module.css";
import { OrderItem } from "../../components/OrderPage/OrderItem/OrderItem";
import { OrderForm } from "../../components/OrderPage/OrderForm/OrderForm";

export function OrderPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleOrder = ({ street, house }) => {
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
            onQuantityChange={(quantity) =>
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
