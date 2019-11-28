import React, {useState} from 'react';

//components
import Body from './Components/Body'
import Container from './Components/Container'
import Display from './Components/Display'
import Numpad from './Components/Numpad'
const App = props => {
  const [ calculateValue, setCalculateValue ] = useState("0")
  return(
    <Body>
      <Container>
        <Display>
          {calculateValue}
        </Display>
        <Numpad setValue={setCalculateValue} displayedValue={calculateValue}/>
      </Container>
    </Body>
  )
}

export default App;
