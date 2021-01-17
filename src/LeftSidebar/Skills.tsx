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

function Skills() {
  const classes = useStyle()
  return (
    <Container style={{ marginTop: '20px', overflow: 'auto' }}>
      <Typography style={{ fontWeight: 'bold' }}>Skills</Typography>
      <Autocomplete
        classes={{
          popupIndicator: classes.popupIndicator,
          input: classes.input,
        }}
        multiple
        disableClearable
        id="tags-outlined"
        options={skills}
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
            placeholder="Enter a skill"
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
        Clear Skills
      </Button>
    </Container>
  )
}

export default Skills

const skills = [
  { title: 'JavaScript' },
  { title: 'CSS3' },
  { title: 'HTML5' },
  { title: 'React' },
  { title: 'NodeJS' },
]
