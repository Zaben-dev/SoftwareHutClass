import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Counter from './views/counter/Counter';
import Home from './views/home/Home';
import Quote from './views/quote/Quote';
import Joke from './views/joke/Joke';
import Space from './views/space/Space';
import Footer from './components/Footer';

import './App.css';

const useStyles = makeStyles({
  appWrapper: {
    maxWidth: '100vw',
    maxHeight: '100vh',
    textAlign: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appWrapper}>
      <BrowserRouter>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/joke" component={Joke} />
          <Route path="/quote" component={Quote} />
          <Route path="/space" component={Space} />
          <Route path="/" component={Home} exact />
          <Route />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
