import {  TextField, FormControl, Select, InputLabel } from '@material-ui/core';
import {useState} from 'react'
import styled from 'styled-components'

function Option({handleFilter, handleRegion}){
  const [continent, setContinent] = useState("")
  const handleChange = event => {
    setContinent(event.target.value)
    handleRegion(event.target.value)
  }
  return(
    <Container>
      <TextField id="outlined-basic" onChange={e => handleFilter(e.target.value)} label="Contries" variant="outlined" />
      <FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-age-native-simple">Continent</InputLabel>
        <Select
          native
          value={continent}
          onChange={handleChange}
          label="Continent"
          inputProps={{
            name: 'continent',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Africa'}>Afrique</option>
          <option value={'Americas'}>Amérique</option>
          <option value={'Asia'}>Asie</option>
          <option value={'Europe'}>Europe</option>
          <option value={'Oceania'}>Océanie</option>
        </Select>
      </FormControl>
    </Container>
    )
}
const Container = styled.div`
  display:flex;
  height:100px;

  justify-content:space-around;
  align-items:center;
  & > *{

    background-color:var(--light-theme-components-color);
  }
`

export default Option
