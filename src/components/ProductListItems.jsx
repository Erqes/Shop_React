import { Card, Button, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function ProductsListItems({
  id,
  productName,
  brand,
  color,
  display,
  processor,
  gpu,
  mainBoard,
  diagonalScreenSize,
  price,
  productType,
  quantity,
}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const cartItemQuantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={
          "https://res.cloudinary.com/dmaw4pa5p/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1729196764/cld-sample-3.jpg"
        }
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{productName}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
          {productName && (
            <div>
              <strong>Model:</strong> {productName}
            </div>
          )}
          {brand && (
            <div>
              <strong>Brand:</strong> {brand}
            </div>
          )}
          {color && (
            <div>
              <strong>Color:</strong> {color}
            </div>
          )}

          {(() => {
            switch (productType) {
              case 1:
                return (
                  <div style={{ marginTop: "10px" }}>
                    {display && (
                      <div>
                        <strong>Display:</strong> {display}
                      </div>
                    )}
                    {diagonalScreenSize && (
                      <div>
                        <strong>Screen Size:</strong> {diagonalScreenSize}{" "}
                        inches
                      </div>
                    )}
                  </div>
                );
              case 2:
                return (
                  <div style={{ marginTop: "10px" }}>
                    {processor && (
                      <div>
                        <strong>Processor:</strong> {processor}
                      </div>
                    )}
                    {gpu && (
                      <div>
                        <strong>GPU:</strong> {gpu}
                      </div>
                    )}
                    {mainBoard && (
                      <div>
                        <strong>Main Board:</strong> {mainBoard}
                      </div>
                    )}
                  </div>
                );
              case 3:
                return (
                  <div style={{ marginTop: "10px" }}>
                    {processor && (
                      <div>
                        <strong>Processor:</strong> {processor}
                      </div>
                    )}
                    {mainBoard && (
                      <div>
                        <strong>Main Board:</strong> {mainBoard}
                      </div>
                    )}
                    {diagonalScreenSize && (
                      <div>
                        <strong>Screen Size:</strong> {diagonalScreenSize}{" "}
                        inches
                      </div>
                    )}
                  </div>
                );
              default:
                return null;
            }
          })()}
        </div>
        <div className="mt-auto">
          {cartItemQuantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{cartItemQuantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
