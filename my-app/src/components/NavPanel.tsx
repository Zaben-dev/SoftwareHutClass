import React from 'react';
import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuIcon: {
    position: 'fixed',
    top: '30px',
    left: '30px',
    cursor: 'pointer',
  },
  menuWrapper: {
    height: '100%',
    fontSize: '25px',
  },
  ulList: {
    listStyleType: 'none',
    margin: '30px',
    padding: 0,
  },
  liItem: {
    marginBottom: '20px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: '.2s',
    '&:hover': {
      backgroundColor: 'grey',
    },
  },
});
const NavPanel = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const history = useHistory();

  const classes = useStyles();

  const redirectTo = (path: string, name: string) => (
    <div
      onClick={() => {
        history.push(path);
      }}
    >
      {name}
    </div>
  );

  return (
    <div>
      <div className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon fontSize={'large'} />
      </div>
      <Drawer
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className={classes.menuWrapper}>
          <ul className={classes.ulList}>
            <li className={classes.liItem}>{redirectTo('/', 'Home')}</li>
            <li className={classes.liItem}>
              {redirectTo('/counter', 'Counter')}
            </li>
            <li className={classes.liItem}>{redirectTo('/space', 'Space')}</li>
            <li className={classes.liItem}>{redirectTo('/joke', 'Jokes')}</li>
            <li className={classes.liItem}>{redirectTo('/quote', 'Quotes')}</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default NavPanel;
