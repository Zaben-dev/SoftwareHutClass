import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footerWrapper: {
    backgroundColor: 'lightblue', //ladny gradient ustaw i ladne czcionki xD
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerWrapper}>
      <p>Wykonali:</p>
      <p>Patryk Dmitruk</p>
      <p>Bartłomiej Golon</p>
      <p>Jerzy Dębowski</p>
    </div>
  );
};

export default Footer;
