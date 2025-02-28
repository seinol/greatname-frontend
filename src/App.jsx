import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Box, createMuiTheme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Login from './components/login/Login';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CreateSurvey from './components/createsurvey/CreateSurvey';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <SnackbarProvider maxSnack={3} autoHideDuration={4000}>

        <Paper elevation={0}>

          <Nav darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />

          <Box mt={3} mb={3}>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={CreateSurvey} path="/create" />
              <Route component={Home} path="/" />
            </Switch>
          </Box>

          <Footer />

        </Paper>

      </SnackbarProvider>

    </ThemeProvider>
  );
};

export default App;
