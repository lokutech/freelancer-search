import { InputAdornment, Paper, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'

function Main() {
  return (
    <Paper style={{ height: '700px' }}>
      <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #BEC0C2'}}>
        <TextField
          id="outlined-basic"
          placeholder="Search for Projects"
          variant="outlined"
          style={{flexGrow: 1}}
          inputProps={{
              style: { height: 36, paddingTop: 0, paddingBottom: 0 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <span style={{fontWeight: 'bold', flexGrow: 1, paddingLeft: 10}}>1400 Results</span>
        <span style={{fontWeight: 'bold'}}>Sort by:Highest Price</span>
      </div>
    </Paper>
  )
}

export default Main
