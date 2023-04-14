import React from 'react'
import { Box, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function HomeArea() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pessoa
          </Typography>
          <Button color="inherit">Listar</Button>
          <Button color="inherit">Adicionar</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 5 }}>
        <Typography>Conteudo</Typography>
      </Box>
    </Box>
  )
}
