import React from 'react'
import Menu from '../common/components/menu'
import Box from '@mui/material/Box'

const Template = (Component: any) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu />
      <Box sx={{ padding: 5 }}>
        <Component />
      </Box>
    </Box>
  )
}

const personTemplate = (InputComponent: any) => {
  return () => Template(InputComponent)
}

export default personTemplate
