import { Box, Button, Card, Container, Divider, Grid, Link } from '@material-ui/core'
import React from 'react'
import ListingTypes from './ListingTypes'
import Price from './Price'
import ProjectsContests from './ProjectsContests'
import ProjectType from './ProjectType'
import Skills from './Skills'
import Location from './Location'
import Languages from './Languages'

function LeftSidebar() {
  return (
    <Card style={{marginBottom:'50px'}} >
      <ProjectsContests />
      <ProjectType />
      <Skills />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <ListingTypes />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Price />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Location />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Languages />
      <Box mx={1} my={3} ><Divider variant={'middle'} /></Box>
      <Container style={{margin:'-15px 0 20px 0'}}>
      <Link href="#" >Reset filters</Link>
      </Container>
    </Card>
  )
}

export default LeftSidebar
