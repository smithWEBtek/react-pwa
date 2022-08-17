import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 'unset',
    minWidth: '400px',
    padding: '20px',
    textAlign: 'center',
  },
  selectedEmpty: {
    margin: '10px',
    border:  '3px solid yellow'
  }
}))

const FormControlSelect = (items) => {
  const [selection, setSelection] = React.useState('')
  const classes = useStyles()
  const handleChangeSelection = (event) => {
    setSelection(event.target.value)
  }
  
  const menuItems = items.items.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)

  return (
    <FormControl
      required
      className={classes.formControl}
      // disabled
      // error
      // variant="outlined"
      variant="filled"
      >
      {/* <InputLabel shrink>Select your answer</InputLabel> */}
      <Select
        labelId="select-demo"
        id="answer-select"
        value={selection}
        onChange={handleChangeSelection}
        // displayEmpty
        // inputProps={{ readOnly: true }}
        // inputProps={{ 'arial-label': 'Without label'}}
        // className={classes.selectedEmpty}
        autoWidth
      >
        {/* <MenuItem value=''>Empty</MenuItem> */}
        {menuItems}
      </Select>
      <FormHelperText>{selection === '' ? 'Select one answer (required)' : 'Selected'}</FormHelperText>
    </FormControl>
  )
}

export default FormControlSelect;
