import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'

function ProjectType() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <Typography style={{ fontWeight: 'bold' }}>Project Type</Typography>
        <FormControlLabel
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
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label={<Typography variant="body2">Hourly Projects</Typography>}
        />
        <Divider style={{ marginTop: '10px', marginBottom: '15px' }} />
      </Container>
    </div>
  )
}

export default ProjectType
