import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FetchProducts from "../data/fetchProducts";
import { formatCurrency } from "../utilities/FormatCurrency";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const products = FetchProducts();
  const item = products.find((i) => i.id === id); //tu get do shopContext
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={
          "https://res.cloudinary.com/dmaw4pa5p/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1729196764/cld-sample-3.jpg"
        }
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.productName}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
