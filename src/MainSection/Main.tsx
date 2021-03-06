import { InputAdornment, Paper, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'
import Job from './Job'
import Jobs from './Jobs';

function Main() {
  const [results, setResults] = useState<number>(0)
  return (
    <Paper style={{ paddingBottom: 1, minWidth: 830 }}>
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
        <span style={{fontWeight: 'bold', flexGrow: 1, paddingLeft: 10}}>{results} Results</span>
        <span style={{fontWeight: 'bold'}}>Sort by:Highest Price</span>
      </div>
      {/* <Job jobId={28945553} /> */}
      {/* <Job jobId={29456977} /> */}
      <Jobs setResults={setResults} />
    </Paper>
  )
}

export default Main
