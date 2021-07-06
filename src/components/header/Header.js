import { useState } from 'react';
import styled from 'styled-components'
import DarkModeToggle from 'react-dark-mode-toggle'

function Header(){
  const [isDarkMode, setIsDarkMode] = useState( () => false )
  return(
    <Container>
      <Logo>contries</Logo>
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
  
`
const Logo = styled.a`
  cursor:pointer;
  font-size:2em
`

export default Header
