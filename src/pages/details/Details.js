import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DetailsCountry from './DetailsCountry';
import styled from 'styled-components';



function Details(){
  const [pays, setPays] = useState()
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setPays(result))
      .catch(error => console.log('error', error));
  },[])

  const {country} = useParams()

  return(
    <Container>
      {pays && <DetailsCountry country={pays[0]}  />}

    </Container>
    )
}

const Container = styled.main`
  display:flex;
  justify-content:center;
  align-items:center;
  height:calc(100vh - 100px);
  & > * {
    height:300px;
  }
`

export default Details
