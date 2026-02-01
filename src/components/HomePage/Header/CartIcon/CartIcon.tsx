import cart from "../../../../assets/cart.png";

export function CartIcon() {
  return (
    <a href="/order" style={{ margin: "-9px 90px 0 20px" }}>
      <img
        src={cart}
        style={{ paddingLeft: "100px", marginTop: "-10px" }}
        alt="Cart"
      />
    </a>
  );
}
