import './App.css';
import Header from './components/header/Header';
import List from './pages/list/List'
import Details from './pages/details/Details'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Container >
      <Router>
      <Header/>
        <Switch>
          <Route path='/:country'>
            <Details />
          </Route>
          <Route path='/'>
            <List/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`

`


export default App;
