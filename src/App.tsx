import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import MainApp from './MainApp';
import { store } from './redux/store';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['__lexend', 'Arial', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
