import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link } from 'wouter'
import { useLocation } from 'wouter'

const Home = () => {
  const [inputQuantity, setInputQuantity] = useState('')
  const [names, setNames] = useState([])

  const inputForName = (number) => {
    if (!number) {
      return null
    }
  }

  return (
    <Box
      sx={{
        paddingTop: 25,
        backgroundColor: 'rgba(20,43,28,1)',
        borderRadius: 2,
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        align="center"
        sx={{ color: 'white' }}
      >
        ClUE GAME
      </Typography>
      <Box sx={{ backgroundColor: 'rgba(122,69,31,1)' }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography align="center">Numero Jugadores</Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <Select
              color="secondary"
              size="small"
              value={inputQuantity}
              onChange={({ target }) => setInputQuantity(Number(target.value))}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
      <Button>
        <Link to="/Game">Ingresar a la app</Link>
      </Button>
    </Box>
  )
}

export default Home
