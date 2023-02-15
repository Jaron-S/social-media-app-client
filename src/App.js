import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from 'scenes/homePage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import LoginPage from 'scenes/loginPage';


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              {<Route path="/" element={ isAuth ? <HomePage/> : <LoginPage />} /> }
              <Route path="/home" element={ isAuth ? <HomePage /> : <LoginPage />}/>
              <Route path="/profile/:userId" element={ isAuth ? <ProfilePage/> : <LoginPage /> } />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
