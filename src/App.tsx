import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainApp from './MainApp';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['__lexend', 'Arial', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
