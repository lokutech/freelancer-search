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

  const MyCheckbox = (props: {
    name: string
    label: string
    state?: boolean
  }) => {
    return (
      <FormControlLabel
        style={{ width: '100%' }}
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
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label={<Typography variant="body2">Fixed Projects</Typography>}
        />
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label={<Typography variant="body2">Sealed</Typography>}
        />
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label={<Typography variant="body2">NDA</Typography>}
        />
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="primary"
            />
          }
          label={<Typography variant="body2">Urgent</Typography>}
        />
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
              color="primary"
            />
          }
          label={<Typography variant="body2">Fulltime</Typography>}
        />
        <FormControlLabel
          style={{ width: '100%' }}
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange}
              name="checkedF"
              color="primary"
            />
          }
          label={<Typography variant="body2">Recruiter</Typography>}
        />
      </Container>
    </div>
  )
}

export default ListingTypes
