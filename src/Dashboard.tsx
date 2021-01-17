import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Left from './Left/Left'
import NavBar from './NavBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
)

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container justify='center' style={{marginTop: '50px'}} >
        <Grid item xs={2}>
          <Left />
        </Grid>
        <Grid item xs={6}>
          hi
        </Grid>
        <Grid item xs={2}>
          hi
        </Grid>
      </Grid>
    </div>
  )
}
