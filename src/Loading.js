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
      <Typography variant="body1" onClick={handleClick} style={{ cursor: 'pointer' }}>
        Click here to show backdrop for 1 minute
      </Typography>

      <Backdrop open={open} style={{ zIndex: 999, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loading;
