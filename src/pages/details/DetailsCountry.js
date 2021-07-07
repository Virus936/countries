import styled from 'styled-components'

function DetailsCountry({country}){
  return(
    <>
        <Flag src={country.flag} alt="" />
      <CountryDesc>
        <h1>{country.name}</h1>
        <DescContent>
          <p><strong>Population : </strong>{country.population}</p>
          <p><strong>Native Name : </strong>{country.nativeName}</p>
          <p><strong>Region : </strong>{country.region}</p>
          <p><strong>Subregion : </strong>{country.subregion}</p>
          <p><strong>Language : </strong>{country.languages.map(e => `${e.nativeName} `)}</p>
          <p><strong>Currency : </strong>{country.currencies.map(e => `${e.name} - ${e.symbol}`)}</p>
        </DescContent>
          
      </CountryDesc>
    </>
    )
}
const Flag = styled.img`
`
const CountryDesc = styled.div`
  margin-left:15px;
  & h1 {
    font-size:3em;
    margin-bottom:15px;
  }
`
const DescContent = styled.div`
  columns:2;
`

export default DetailsCountry
