import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Tabs, Tab, makeStyles } from '@material-ui/core'
import { SvgIcon } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const useStyle = makeStyles({
  indicator: {
    left: '0px',
    width: '4px',
    textTransform: 'none',
  },
  selected: {
    background: '#F0F0F0',
    borderBottom: '1px solid #DEDEDE',
    borderTop: '1px solid #DEDEDE'
  },
})

export default function ProjectsContests() {
  const classes = useStyle()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const projectLabel = (
    <Grid container direction="row" alignItems="center">
      <SvgIcon style={{ marginRight: '15px' }}>
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </SvgIcon>
      <Typography>Projects</Typography>
    </Grid>
  )

  const contestLabel = (
    <Grid container direction="row" alignItems="center">
      <SvgIcon style={{ marginRight: '15px' }}>
        <path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z" />
      </SvgIcon>
      <Typography>Contests</Typography>
    </Grid>
  )

  return (
    <Paper square>
      <Tabs
        classes={{
          indicator: classes.indicator,
        }}
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="projects or contests"
        orientation="vertical"
        variant="standard"
      >
        <Tab
          classes={{ selected: classes.selected }}
          style={{ textTransform: 'none', padding: '10px 20px', opacity: '1' }}
          label={projectLabel}
          disableRipple
        />
        <Tab
          classes={{ selected: classes.selected }}
          style={{ textTransform: 'none', padding: '10px 20px', opacity: '1' }}
          label={contestLabel}
          disableRipple
        />
      </Tabs>
    </Paper>
  )
}
