import Cart from "./Cart";

function ChildA({ names, setName, setCart }) {
  const updateName = () => {
    let newName = [
      "Hello World",
      "Hope To The World",
      "I dont Make Sence",
      "$232344",
    ];
    setName(newName);
  };

  const addNameToCart = () => {};

  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h1>Child A</h1>
      <ol>
        {names.map((name, i) => (
          <li
            onClick={() => {
              setCart((c) => [...c, name]);
            }}
            key={i}
          >
            {name}
          </li>
        ))}
      </ol>
      <button onClick={updateName}>Update Names</button>
    </div>
  );
}

export default ChildA;
