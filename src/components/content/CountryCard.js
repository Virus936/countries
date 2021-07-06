import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CountryCard({flag, name, population, capital, region}){
  return(
    <Container>
      <img src={flag} width='100%' alt="" />
      <div>
      <h1>{name}</h1>
      <p><strong>Population :</strong> <NumberFormat value={population} displayType={'text'} thousandSeparator={true}/></p>
      <p><strong>Capital :</strong> {capital}</p>
      <p><strong>region :</strong> {region}</p>
    </div>
    </Container>
    )
}
const Container = styled.article`
  display:flex;
  flex-direction:column;
  width:399px;
  overflow:hidden;
  background-color:var(--light-theme-components-color);
  box-shadow: 0 0 10px purple;
  border-radius:5px;
  & div{
    padding: 12px;
  }
  & h1 {
    margin-bottom:12px;
  }
`
CountryCard.defaultProps = {
  flag : "https://restcountries.eu/data/khm.svg" ,
  name : "Cambodge",
  population : "15m",
  region :"Asia",
  capital : "Phnom Penh"
}

export default CountryCard
