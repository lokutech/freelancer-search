import React from 'react'
import Grid from '@material-ui/core/Grid'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import RightSidebar from './RightSidebar/RightSidebar'
import NavBar from './NavBar'
import Main from './MainSection/Main'

export default function SearchAppBar() {

  return (
    <div>
      <NavBar />
      <Grid container justify='space-between' wrap='nowrap' style={{marginTop: '50px', gap: 16}}  >
        <Grid item xs={2} style={{minWidth: 280, marginLeft: 20}}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={7} style={{minWidth: 700}}>
          <Main />
        </Grid>
        <Grid item xs={2} style={{minWidth: 280, marginRight: 20}}>
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  )
}
