import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomHeader, {addNumber} from "./components/CustomHeader"
import Counter from "./components/Counter"


const App = () => {
  const adddedNumber = addNumber(1,2);

  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) =>{
    console.log(newNumber);
    setChangedNumber(newNumber);
  }

  const liczcbaMniejszaOdZera = (liczba: number) => {
      if(liczba<0){
        return (<div>Liczba mniejsza od 0</div>)
      }
  }

  return (
    <div className="App">
      <CustomHeader>
        <Counter initialNumber={10} onNumberChange={handleNumberChange}/>
        {
          changedNumber>0 && (<div>Liczba większa od 0</div>)
        }
        {liczcbaMniejszaOdZera(changedNumber)}
      </CustomHeader>
    </div>
  );
}

export default App;
