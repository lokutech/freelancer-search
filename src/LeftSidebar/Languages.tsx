import {
    Box,
    Button,
    Chip,
    Container,
    makeStyles,
    TextField,
    Typography,
  } from '@material-ui/core'
  import Autocomplete from '@material-ui/lab/Autocomplete'
  
  import React from 'react'
  
  const useStyle = makeStyles({
    popupIndicator: {
      display: 'none',
    },
    root: {
      borderRadius: 0,
    },
    input: {
      width: 'auto !important',
    },
  })
  
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }
  
  function Languages() {
    const classes = useStyle()
    return (
      <Container style={{ marginTop: '20px', overflow: 'auto' }}>
        <Typography style={{ fontWeight: 'bold' }}>Languages</Typography>
        <Autocomplete
          classes={{
            popupIndicator: classes.popupIndicator,
            input: classes.input,
          }}
          multiple
          disableClearable
          id="tags-outlined"
          options={languages}
          getOptionLabel={(option) => option.title}
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
              placeholder="Enter a language"
              style={{ background: 'white' }}
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
          Clear Languages
        </Button>
      </Container>
    )
  }
  
  export default Languages
  
  const languages = [
    { title: 'English' },
    { title: 'Turkish' },
    { title: 'Arabic' },
  ]
  