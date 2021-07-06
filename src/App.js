import './App.css';
import Header from './components/header/Header';
import List from './pages/list/List'
import styled from 'styled-components';


function App() {
  return (
    <Container >
      <Header/>
      <List/>
    </Container>
  );
}

const Container = styled.div`

`


export default App;
