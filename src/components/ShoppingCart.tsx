import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../conrext/ShoppingCartContex";
import { CartItem } from "./CartItems";
import storItems from "../data/items.json";
import { format } from "../utils/format";

type ShoppingCartProviderProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProviderProps) {
  const { closeCart, cartItems } = useShoppingCart();
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
            {format(
              cartItems.reduce((total, cartItem) => {
                const item = storItems.find((i) => i.id === cartItem.id);

                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
