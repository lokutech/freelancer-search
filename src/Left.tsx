import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Grid, { GridSpacing } from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'

function Left() {
  return (
    <div >
      <Card style={{height:'100vh'}}>
        <Container>
          <Grid container direction="row" alignItems="center" justify='center'>
            <SvgIcon>
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </SvgIcon>
            <Typography>Projects</Typography>
          </Grid>
          <Grid container direction="row" alignItems="center" justify='center'>
            <SvgIcon>
              <path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z" />
            </SvgIcon>
            <Typography>Contests</Typography>
          </Grid>
        </Container>
      </Card>
    </div>
  )
}

export default Left
