import { useEffect } from "react";

function ChildB({ names, setName }) {
  const updateName = () => {
    let newName = ["ChildB", "ChildB", "ChildB", "ChildB"];
    setName(newName);
  };

  //   useEffect(() => {
  //     let newNames = [];
  //     for (let i = 0; i < names.length; i++) {
  //       let k = i + 1;
  //       if (k % 2 !== 0) {
  //         newNames.push(names[i]);
  //       }
  //     }
  //     setName(newNames);
  //   }, []);

  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      <h1>Child b Display All Evene Name</h1>
      <ul>
        {names.map((name, i) => {
          //   if (i % 2 !== 0) {
          //     return null;
          //   }
          return <li key={i}>{name}</li>;
        })}
      </ul>
      <button onClick={updateName}>Update Names</button>
    </div>
  );
}

export default ChildB;
