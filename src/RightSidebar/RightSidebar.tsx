import { Box, Button, Card, Container, Divider, Grid, Link } from '@material-ui/core'
import React from 'react'
import Skills from './Skills'
import Location from './Location'
import Languages from './Languages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons'


function LeftSidebar() {
  return (
    <Card style={{marginBottom:'50px'}}>
      <i className="fas fa-calendar-times"></i>
      <Container style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: 24}}>
      <FontAwesomeIcon icon={faCalendarTimes} color='#E3446D' style={{marginRight: 10, fontSize: '1.7rem'}} />
      Exclude
      </Container>
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Skills />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Location />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Languages />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Container style={{margin:'-15px 0 20px 0'}} >
      <Link href="#" color='secondary' >Reset filters</Link>
      </Container>
    </Card>
  )
}

export default LeftSidebar
