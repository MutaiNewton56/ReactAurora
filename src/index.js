import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

//import Farm from "./DisplayData/Farm";

import ClickEvent from "./Events/ClickEvent";

import InputEvent from "./Events/InputEvent";

import AgeApp from "./STATE/AgeApp";

import AgeAPP3 from "./STATE/AgeAPP3";

import AllProduct from "./STATE/ProductApp/AllProducts";

import Colors from "./STATE/ColorAPP/Colors";

import ShopKeeper from "./STATE/Shop/ShopKeeper";

import Basics from "./Effect/Basics";

import ParentApp from "./STATE/NewColor/Parent";

import EffectEvents from "./Effect/EffectEvents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EffectEvents />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
