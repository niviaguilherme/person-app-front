import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const navigate = useNavigate()

  const navigateClick = (url: any) => {
    navigate(url)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pessoas
        </Typography>
        <Button color="inherit" onClick={() => navigateClick('/')}>
          Listar
        </Button>
        <Button color="inherit" onClick={() => navigateClick('/add')}>
          Adicionar
        </Button>
      </Toolbar>
    </AppBar>
  )
}
