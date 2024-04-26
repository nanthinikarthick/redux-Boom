import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({label, name, value, onChange, disabled,type}) {
  return (
    <div className='select-box '> <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <label>
    <TextField 
        id="outlined-basic" 
        value={value}
        name={name}
        type={type}
        label={label} 
        disabled={disabled}
        onChange={onChange}
        variant="outlined" />
    </label>
    
  </Box>
  </div>
   
  );
}

