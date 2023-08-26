import { Button, Card } from "react-bootstrap";
import { format } from "../utils/format";
import { useShoppingCart } from "../conrext/ShoppingCartContex";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCatrQuantity,
    decreaseCatrQuantity,
    removeFromQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline nb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{format(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCatrQuantity(id)}>
              + And To Cart
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
                <Button onClick={() => decreaseCatrQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in card
                </div>
                <Button onClick={() => increaseCatrQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                className="w-100"
                onClick={() => removeFromQuantity(id)}
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
