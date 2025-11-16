import { Container, CssBaseline, ThemeProvider, createTheme, Box, Typography } from '@mui/material';
import Counter from './features/counter/Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#646cff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Box>
          <Typography variant="h3" component="h1" gutterBottom>
            React 19 + Vite + Redux Toolkit + Material UI
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            A modern React 19 playground with state management and beautiful UI components
          </Typography>
        </Box>
        
        <Counter />
        
        <Box sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          <Typography variant="body2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
