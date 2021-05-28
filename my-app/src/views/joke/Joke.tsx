import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { getJoke, Category } from '../../services/jokes';
import NavPanel from '../../components/NavPanel';

// ostylować przycisk (dać go trochę w dół) i jakieś marginesy do wszystkiego żeby wyglądało xD

const Joke = () => {
  const [inputValue, setInputValue] = useState(Category.General);
  const [joke, setJoke] = useState({
    setup: '',
    punchline: '',
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInputValue(event.target.value as Category);
  };

  const newJoke = () => {
    getJoke(inputValue).then((joke) => {
      console.log(joke.setup);
      setJoke({
        setup: joke.setup,
        punchline: joke.punchline,
      });
    });
  };

  return (
    <div>
      <NavPanel />
      <h1>Jokes generator</h1>
      <FormControl>
        <InputLabel>Joke category</InputLabel>
        <Select value={inputValue} onChange={handleChange}>
          <MenuItem value={Category.General}>General</MenuItem>
          <MenuItem value={Category.Programming}>Programming</MenuItem>
        </Select>
        <FormHelperText>Please choose joke category</FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" onClick={newJoke}>
        Generate
      </Button>
      <div>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </div>
    </div>
  );
};
export default Joke;
