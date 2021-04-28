import React, { useState } from "react";

import NavPanel from "../../components/NavPanel";
import Button from "../../button";

const Counter = () => {
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
    <div>
      <NavPanel />
      <Button name={"Dodaj"} color={"primary"} onClick={handleAdd} />
      <Button name={"Reset"} color={"default"} onClick={handleReset} />
      <Button name={"Odejmij"} color={"secondary"} onClick={handleDecrement} />
      {counterView()}
    </div>
  );
};

export default Counter;
