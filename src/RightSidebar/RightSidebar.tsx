import { Box, Button, Card, Container, Divider, Grid, Link } from '@material-ui/core'
import React from 'react'
import ListingTypes from '../LeftSidebar/ListingTypes'
import Price from '../LeftSidebar/Price'
import ProjectsContests from '../LeftSidebar/ProjectsContests'
import ProjectType from '../LeftSidebar/ProjectType'
import Skills from '../LeftSidebar/Skills'
import Location from '../LeftSidebar/Location'
import Languages from '../LeftSidebar/Languages'

function LeftSidebar() {
  return (
    <Card style={{marginBottom:'50px'}}>
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
