import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/FormatCurrency";
import FetchProducts from "../data/fetchProducts";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL } from "../env";
import { STRIPE_KEY } from "../env";
export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const storeItems = FetchProducts();

  async function handleClick() {
    const stripe = await loadStripe(STRIPE_KEY);
    const response = await fetch(`${API_URL}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    const session = await response.json();
    console.log(response.headers);
    console.log(response.Header);
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
        <Button onClick={handleClick}>Buy now</Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
