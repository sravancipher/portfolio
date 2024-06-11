import React, { useState } from 'react';
import { Backdrop, CircularProgress, Typography } from '@mui/material';

function Loading () {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    // Automatically close the backdrop after 60 seconds (1000 milliseconds * 60)
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <div>
      <Backdrop open={open} style={{ color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    
    
  );
};

export default Loading;
