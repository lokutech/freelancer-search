import {
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'

function ListingTypes() {
  const [state, setState] = useState({
    checkedFixed: false,
    checkedSealed: false,
    checkedNda: false,
    checkedUrgent: false,
    checkedFulltime: false,
    checkedRecruiter: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(
      { ...state,
         [event.target.name]: event.target.checked }
      )
  }

  interface Checkbox {
    name: string
    label: string
    state: boolean
  }

  const MyCheckbox = ({name, state, label}:Checkbox) => {
    return (
      <FormControlLabel
        style={{ width: '100%' }}
        control={
          <Checkbox
            checked={state}
            onChange={handleChange}
            name={name}
            color="primary"
          />
        }
        label={<Typography variant="body2">{label}</Typography>}
      />
    )
  }

  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <Typography style={{ fontWeight: 'bold' }}>Listing Types</Typography>
        <MyCheckbox name='checkedFixed' state={state.checkedFixed} label='Fixed Projects' />
        <MyCheckbox name='checkedSealed' state={state.checkedSealed} label='Sealed'/>
        <MyCheckbox name='checkedNda' state={state.checkedNda} label='NDA' />
        <MyCheckbox name='checkedUrgent' state={state.checkedUrgent} label='Urgent'/>
        <MyCheckbox name='checkedFulltime' state={state.checkedFulltime} label='Fulltime'/>
        <MyCheckbox name='checkedRecruiter' state={state.checkedRecruiter} label='Recruiter'/>
      </Container>
    </div>
  )
}

export default ListingTypes