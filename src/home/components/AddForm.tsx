import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

export default function AddForm() {
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h4">Cadastrar Pessoa</Typography>
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        fullWidth
        sx={{ mt: 3 }}
      />
      <TextField
        id="outlined-basic"
        label="Idade"
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Salvar
      </Button>
    </Box>
  )
}
