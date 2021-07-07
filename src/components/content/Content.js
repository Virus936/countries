import styled from 'styled-components'
import CountryCard from './CountryCard'


function Content({states, filter, region}){

  return(
    <Container>
      { states && states.filter(country => {
        if (filter === '' && region === '') {
          return country
        }else if (region === '' && country.name.toLowerCase().includes(filter.toLowerCase())){
          return country
        }else if (filter === '' && country.region === region ) {
          return country
        }else if (country.region === region && country.name.toLowerCase().includes(filter.toLowerCase())) {
          return country
        }
        return false
      }).map( country => { 
        return  <CountryCard 
                  key={country.name}
                  name = {country.name} 
                  capital={country.capital}  
                  population = {country.population}
                  flag={country.flag}
                  region={country.region}
          /> 
      })}
    </Container>
    )
}

const Container = styled.section`
  margin:auto;
  max-width:1800px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
`
export default Content
