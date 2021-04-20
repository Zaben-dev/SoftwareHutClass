import React, { useState } from "react";
import "./App.css";

import Button from "./button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrement = (): void => {
    setCounter(counter - 1);
  };

  const handleReset = (): void => {
    setCounter(0);
  };

  const counterView = () => {
    if (counter < 15) {
      if (counter > 10) {
        return (
          <div>
            <p>{counter}</p>
            <p>Liczba większa od 10</p>
          </div>
        );
      } else if (counter < 10) {
        return (
          <div>
            <p>{counter}</p>
            <p>Liczba mniejsza od 10</p>
          </div>
        );
      } else if (counter === 10) {
        return (
          <div>
            <p>{counter}</p>
            <p>Liczba równa 10</p>
          </div>
        );
      }
    } else if (counter >= 15) {
      return <p>Liczba większa od 15. Zresetuj liczbę.</p>;
    }
  };

  // większy od 10 mniejszy od 10
  // gdy większa od 15 chować counter i że przekroczył.

  return (
    <div className="App">
      <Button name={"+"} color={"primary"} onClick={handleAdd} />
      {counterView()}
      <Button name={"-"} color={"secondary"} onClick={handleDecrement} />
      <Button name={"Reset"} color={"primary"} onClick={handleReset} />
    </div>
  );
};

export default App;
