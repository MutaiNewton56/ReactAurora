import { useState } from "react";

// Hook.
// React Functions

import ShowCurrentAge from "./OtherComponents/ShowCurrentAge";

import GenerateAge from "./OtherComponents/GenerateAge";

import ButtonSection from "./OtherComponents/ButtonSection";

import LessComponent from "./OtherComponents/LessComponent";

function AgeApp() {
  const [currentAge, setCurrentAge] = useState(5);

  const [catsAge, setCatAge] = useState(4);

  function plusAge() {
    let newAge = currentAge + 1;
    setCurrentAge(newAge);
  }

  function updateState() {
    // setCurrentAge(currentAge + 1);
    // setCatAge(currentAge + 2);
    // let newAge = currentAge + 2;
    // setCurrentAge(newAge - 2);
    // catsAge(newAge - 1);
    // setCurrentAge(currentAge + 2);
    // // setCatAge(currentAge - 1);
    // // async in nature
    // setCurrentAge(function (kittens) {
    //   let the_newState = kittens + 2;
    //   setCatAge(the_newState - 1);
    //   return the_newState;
    // });
    // //setCurrentAge((c) => c + 2);
  }

  return (
    <div>
      <div>
        <h1>This is an Age Checker APP 3</h1>
        <ShowCurrentAge currentAge={currentAge} />
        <GenerateAge currentAge={currentAge} />
      </div>
      <ButtonSection
        currentAge={currentAge}
        setCurrentAge={setCurrentAge}
        plusAge={plusAge}
      />
      <button onClick={updateState}>+2</button>
      <h1>Cats Age {catsAge}</h1>
    </div>
  );
}

export default AgeApp;
