import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'

function ListingTypes() {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const MyCheckbox = (props: { name: string; label: string, state?: boolean }) => {
    return (
      <FormControlLabel style={{width:'100%'}}
      control={
          <Checkbox
          checked={props.state}
          onChange={handleChange}
          name={props.name}
          color="primary"
          />
        }
        label={props.label}
      />
    )
  }

  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <Typography style={{ fontWeight: 'bold' }}>Listing Types</Typography>
        <MyCheckbox name="checkedA" label="Fixed Projects" state={state.checkedA} />
        <MyCheckbox name="checkedB" label="Sealed" state={state.checkedB} />
        <MyCheckbox name="checkedC" label="NDA" state={state.checkedC} />
        <MyCheckbox name="checkedD" label="Urgent" state={state.checkedD} />
        <MyCheckbox name="checkedE" label="Fulltime" state={state.checkedE} />
        <MyCheckbox name="checkedF" label="Recruiter" state={state.checkedF} />
      </Container>
    </div>
  )
}

export default ListingTypes
