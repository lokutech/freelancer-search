import { Box, Container, Divider, makeStyles, Slider, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles({
    rail: {
      height: '4px',
      color: '#BEC0C2',
      opacity: 1,
      borderRadius: 5,
    },
    track: {
      height: '4px',
    },
    thumb: {
      height: '17px',
      width:'17px',
      background: 'white',
      border:'3px #139ff0 solid',
      top: 11
    },
  })

function Price() {
  const classes = useStyle()
  const [fixedValue, setFixedValue] = useState<number[]>([1, 10000])
  const [hourValue, setHourValue] = useState<number[]>([1, 120])

  const handleChange = (event: any, newValue: number | number[]) => {
    setFixedValue(newValue as number[])
  }

  const handleChangeHour = (event: any, newValue: number | number[]) => {
    setHourValue(newValue as number[])
    console.log(hourValue)
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography style={{ fontWeight: 'bold' }}>Fixed Price</Typography>
      <Slider
        value={fixedValue}
        onChange={handleChange}
        min={1}
        max={10000}
        style={{marginBottom:-10}}
        classes={{rail:classes.rail,track:classes.track,thumb:classes.thumb}}
      />
      <Typography align={'center'}>${fixedValue[0]} - ${fixedValue[1]}</Typography>

      <Box my={3}>
        <Divider variant={'fullWidth'} />
      </Box>
      <Typography style={{ fontWeight: 'bold' }}>Hourly Price</Typography>
      <Slider
        value={hourValue}
        onChange={handleChangeHour}
        min={1}
        max={120}
        style={{marginBottom:-10}}
        classes={{rail:classes.rail,track:classes.track,thumb:classes.thumb}}
      />
      <Typography align={'center'}>${hourValue[0]} - ${hourValue[1]}</Typography>
    </Container>
  )
}

export default Price
