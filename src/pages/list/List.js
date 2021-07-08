import { useState, useEffect } from 'react';
import Option from '../../components/option/Option';
import Content from '../../components/content/Content'
import styled from 'styled-components'

function List(){
  const [states, setStates] = useState("")
  const [filter, setFilter] = useState("")
  const [region, setRegion] = useState("")
  useEffect(() => {

    fetch("https://restcountries.eu/rest/v2/all", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setStates(result))
      .catch(error => console.log('error', error));
  },[])


  return(
    <Container>
      <Option handleFilter={setFilter} handleRegion={setRegion} />
      <Content states = {states} filter = {filter} region={region}/>
    </Container>
    )
}

const Container = styled.main`
  min-height:calc(100vh - 100px);
`

export default List
