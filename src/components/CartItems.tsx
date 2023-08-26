import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../conrext/ShoppingCartContex";
import storItems from "../data/items.json";
import { format } from "../utils/format";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromQuantity } = useShoppingCart();
  const item = storItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="img"
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
        }}
      />

      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".t5rem" }}>
          {format(item.price)}
        </div>
      </div>
      <div>{format(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromQuantity(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
