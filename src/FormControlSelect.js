import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormControlSelect = (selectItems) => {
  console.log(selectItems);
  const selectMenuItems = selectItems.items.map(item => (
    <MenuItem value={item.name}>{item.name}</MenuItem>
  ))
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value="size"
      >
        {selectMenuItems}
      </Select>
    </FormControl>
  )
}

export default FormControlSelect;
