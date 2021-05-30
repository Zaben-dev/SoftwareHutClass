import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { getJoke, Category } from "../../services/jokes";
import NavPanel from "../../components/NavPanel";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  jokeCointainer: {
    marginRight: "30%",
    borderRight: "2px solid black",
    marginLeft: "30%",
    borderLeft: "2px solid black",
  },
  buttonGen: {
    fontWeight: "bold",
    margin: "5px",
  },
  bodyStyle: {
    fontFamily: "Roboto, sans-serif",
  },
});
const Joke = () => {
  const [inputValue, setInputValue] = useState(Category.General);
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
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

  const classes = useStyles();
  return (
    <div className={classes.bodyStyle}>
      <NavPanel />
      <h1>
        <u>JOKES GENERATOR</u>
      </h1>
      <FormControl>
        <InputLabel>Joke category</InputLabel>
        <Select value={inputValue} onChange={handleChange}>
          <MenuItem value={Category.General}>General</MenuItem>
          <MenuItem value={Category.Programming}>Programming</MenuItem>
        </Select>
        <FormHelperText>Please choose joke category</FormHelperText>
      </FormControl>
      <br />
      <Button
        className={classes.buttonGen}
        variant="contained"
        color="primary"
        onClick={newJoke}
      >
        Generate
      </Button>
      <br />
      <br />
      <div className={classes.jokeCointainer}>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </div>
    </div>
  );
};
export default Joke;
