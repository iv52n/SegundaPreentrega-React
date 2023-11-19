import React from "react";
import { Badge, Button } from "@chakra-ui/react";
import "./style.css";
const CartWidget = () => {
  return (
    <div>
      <Button colorScheme="blackAlpha" variant="ghost">
        <h3 id="car">carrito</h3>
      </Button>
    </div>
  );
};

export default CartWidget;
