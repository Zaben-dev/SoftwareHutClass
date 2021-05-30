import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { getQuote, Tag } from "../../services/quote";
import NavPanel from "../../components/NavPanel";

const Quote = () => {
  const [inputValue, setInputValue] = useState(Tag.Technology);
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInputValue(event.target.value as Tag);
  };

  const newQuote = () => {
    getQuote(inputValue).then((quote) => {
      setQuote({
        content: quote.content,
        author: quote.author,
      });
    });
  };

  return (
    <div>
      <NavPanel />
      <h1>Quotes generator</h1>
      <FormControl>
        <InputLabel>Quote category</InputLabel>
        <Select value={inputValue} onChange={handleChange}>
          <MenuItem value={Tag.FamousQuotes}>Famous Quotes</MenuItem>
          <MenuItem value={Tag.Wisdom}>Wisdom</MenuItem>
          <MenuItem value={Tag.Inspirational}>Inspirational</MenuItem>
          <MenuItem value={Tag.Friendship}>Friendship</MenuItem>
          <MenuItem value={Tag.Technology}>Technology</MenuItem>
        </Select>
        <FormHelperText>Please choose quote category</FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" onClick={newQuote}>
        Generate
      </Button>
      <div>
        <p>{quote.content}</p>
        <p>{quote.author}</p>
      </div>
    </div>
  );
};
export default Quote;
