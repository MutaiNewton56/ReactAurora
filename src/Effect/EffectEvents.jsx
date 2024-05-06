import { useState } from "react";

import { useEffect } from "react";

function Effectiveness() {
  const [clicked, setclicked] = useState(0);
  const [show, setShow] = useState(false);

  const updateShow = () => {
    if (show === false) {
      setclicked(clicked + 1);
      setShow(true);
    }
  };

  return (
    <div>
      {show === true ? <StopWatch clicked={clicked} /> : null}
      <button onClick={updateShow}>Show Stop Watch</button>
      <button onClick={() => setShow(false)}>Hide Stop Watch</button>

      <h1>Clicked Show Stop Watch {clicked}</h1>
    </div>
  );
}

// Conditional Render.
function StopWatch({ clicked }) {
  const [t, setT] = useState(1);

  useEffect(function () {
    const interval = setInterval(() => {
      setT((t) => t + 1);
      console.log("Button Clicked->", clicked);
    }, 1000);
    console.log("The Component Mounted/Rendered");

    return function () {
      console.log("The Component UnMounted/ Unrendered");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>
        Stop Watch <b>{t}</b>
      </h1>
    </div>
  );
}

export default Effectiveness;
