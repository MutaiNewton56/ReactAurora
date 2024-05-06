import { useState } from "react";

import ChildA from "./ChildA";

import ChildB from "./ChildB";

import Cart from "./Cart";

function Parent() {
  const [names, setName] = useState(["Michael", "Sam", "Ngugi"]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Cart cart={cart} />
      <ChildA names={names} setName={setName} setCart={setCart} />
      <ChildB names={names} setName={setName} />
    </div>
  );
}

export default Parent;
