import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

const FormControlSelect = (selectItems) => {
  console.log(selectItems);
  const selectMenuItems = selectItems.items.map(item => (
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
  ))
  return (
    <FormControl style={{ minWidth: '400px', display: 'block' }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value=''
      >
        {selectMenuItems}
      </Select>
    </FormControl>
  )
}

export default FormControlSelect;
