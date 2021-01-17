import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import LeftSidebar from './LeftSidebar/LeftSidebar'
import NavBar from './NavBar'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
  }),
)

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container justify='center' style={{marginTop: '50px'}} spacing={2} >
        <Grid item xs={2}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={7}>
          <Paper style={{height:'700px'}}>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={{height:'700px'}}>
            Hi
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
