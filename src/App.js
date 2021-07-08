import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import List from './pages/list/List'
import Details from './pages/details/Details'
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {lightTheme, darkTheme} from './theme/theme'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [isDarkMode, setIsDarkMode] = useState( () => false )

  return (
    <ThemeProvider theme={isDarkMode? darkTheme:lightTheme} >
      <GlobalStyle />
      <Router>
        <Header isDarkMode = {isDarkMode} handleTheme={setIsDarkMode}/>
        <Switch>
          <Route path='/:country'>
            <Details />
          </Route>
          <Route path='/'>
            <List/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  #root{
    background-color:${(props)=>{console.log(props.theme);return props.theme.body}}
  }
`


export default App;
