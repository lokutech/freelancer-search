import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'

const useStyle = makeStyles({
  popupIndicator: {
    display: 'none',
  },
  root: {
    borderRadius: 0,
    padding:'0 !important',
    paddingLeft: '10 !important'
  },
  input: {
    width: 'auto !important',
    paddingTop:'0 !important',
    paddingBottom:'0 !important',
  },
})

function Location() {
  const classes = useStyle()

  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Container style={{ marginTop: '20px', overflow: 'auto' }}>
      <Typography style={{ fontWeight: 'bold' }}>Specific Location</Typography>
      <Autocomplete
        classes={{
          popupIndicator: classes.popupIndicator,
          inputRoot: classes.input,
        }}
        // multiple
        disableClearable
        id="tags-outlined"
        options={countries}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        style={{ background: 'red' }}
        ChipProps={{
          size: 'small',
          variant: 'outlined',
          classes: {
            root: classes.root,
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            // placeholder="Enter a skill"
            style={{ background: 'white' , paddingLeft: '20'}}
          />
        )}
      />
      <Box m={2}></Box>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="primary"
        style={{ textTransform: 'none', fontWeight: 'bold' }}
      >
        Clear Location
      </Button>
    </Container>
  )
}

export default Location

const countries = [
  { name: 'Turkey', abr: 'tr' },
  { name: 'United States', abr: 'usa' },
]
