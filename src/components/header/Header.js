import styled from 'styled-components'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Link } from 'react-router-dom';

function Header({isDarkMode, handleTheme}){
  return(
    <Container >
      <Link to='/'>contries</Link>
      <DarkModeToggle
        onChange={handleTheme}
        checked={isDarkMode}
      />
      
    </Container>
    )
}


const Container = styled.header`
  display:flex;
  height:100px;
  align-items:center;
  justify-content:space-between;
  background-color:${(props)=> props.theme.components};
  padding:0 60px;
  color:${(props) => {return props.theme.color}};
  & a {
    text-transform:capitalize;
    font-variant-caps: small-caps;
    cursor:pointer;
    text-decoration:none;
    color:inherit;
    font-size:2em
  }
`

export default Header
