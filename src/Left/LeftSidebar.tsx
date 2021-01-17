import { Card, Container, Grid } from '@material-ui/core'
import React from 'react'
import ProjectsContests from './ProjectsContests'
import ProjectType from './ProjectType'

function Left() {
  return (
    <Card>
      <ProjectsContests />
      <ProjectType />
    </Card>
  )
}

export default Left
