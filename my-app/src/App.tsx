import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Counter from "./views/counter/Counter";
import Home from "./views/home/Home";
import Quote from "./views/quote/Quote";
import Joke from "./views/joke/Joke";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/joke" component={Joke} />
          <Route path="/quote" component={Quote} />
          <Route path="/" component={Home} exact />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// return (
//   <div className="App">
//     <Button name={"Dodaj"} color={"primary"} onClick={handleAdd} />
//     <Button name={"Reset"} color={"default"} onClick={handleReset} />
//     <Button name={"Odejmij"} color={"secondary"} onClick={handleDecrement} />
//     {counterView()}
//   </div>
// );
//};

export default App;
