import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SmallButton(props) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" size="small" color={props.color} onClick={props.handleClick}>
          {props.text}
        </Button>
      </div>
    </Box>
  );
}
