import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input(props) {
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: '90%',
      }}
    >
      <TextField type={props.type} fullWidth label={props.label} id="fullWidth" />
    </Box>
  );
}
export {Input};