import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import { useState } from 'react'
import { skillsAll } from './skillsAll'

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

function Skills() {
  const [value, setValue] = useState<ISkills[] | []>([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (value: ISkills[]) => {
    console.log(value)
    // setValue(value.map(a=>a.id))   // keep it for api call later
    setValue(value)
  }

  const handleDelete = () => {
    setValue([])
    setInputValue('')
  }

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
        options={skillsAll}
        value={value}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={(_event, value1) => handleChange(value1)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => { setInputValue(newInputValue) }}
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

interface ISkills {
  name: string
  id: number
}
