import { useState } from 'react';
import styled from 'styled-components'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Link } from 'react-router-dom';

function Header(){
  const [isDarkMode, setIsDarkMode] = useState( () => false )
  return(
    <Container>
      <Link to='/'>contries</Link>
      <DarkModeToggle
        onChange={setIsDarkMode}
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
  background-color:var(--light-theme-components-color);
  padding:0 60px;
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
