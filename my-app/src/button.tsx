import React from 'react';
import Button from '@material-ui/core/Button';

interface props {
  name: string;
  color: 'default' | 'inherit' | 'primary' | 'secondary';
  onClick: () => void;
}

const button: React.FC<props> = ({ name, color, onClick }) => {
  return (
    <Button variant="outlined" color={color} onClick={onClick}>
      {name}
    </Button>
  );
};

export default button;
