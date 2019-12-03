import styled from 'styled-components'
import React, {Fragment} from 'react'

//components
import Button from './Button'

const RightPad = styled.div`
    height: 100%;
    width: calc(100%/4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
`
const NumpadContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Numpad = ({ setValue, displayedValue  }) => {
    

    const CalculateResult = () => {
        if(displayedValue==0) return
        setValue( eval(displayedValue.replace("x","*")).toFixed(3) + "" )
    }
    const CalculateButtonValue = value => {
        if (value==="AC") {
            setValue("0")
            return
        }
        if (value==="DEL") {
            setValue(displayedValue === "0" || displayedValue.length==1 ? "0": displayedValue.slice(0, -1))
            return
        }
        if (displayedValue==="0"){
            if(value === "."){
                setValue(displayedValue + value)
            }
            else{
                setValue(value.toString())
            }
        } else{
            setValue(displayedValue + value)
            
        }

        
    }
    return (
        <Container>

            <NumpadContainer>
                <Button  value={"AC"} width={3/2} color="red" addValue={a => CalculateButtonValue(a)}/>
                <Button  value={"DEL"} addValue={a => CalculateButtonValue(a)}/>
                
                <Button  value={7} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={8} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={9} addValue={a => CalculateButtonValue(a)}/>

                <Button  value={4} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={5} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={6} addValue={a => CalculateButtonValue(a)}/>

                <Button  value={1} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={2} addValue={a => CalculateButtonValue(a)}/>
                <Button  value={3} addValue={a => CalculateButtonValue(a)}/>

                <Button value={0} width={3/2} addValue={a => CalculateButtonValue(a)}/>
                <Button value={"."} addValue={a => CalculateButtonValue(a)}/>


            </NumpadContainer>
            <RightPad>
                <Button value={"/"} width={1} height={5} addValue={a => CalculateButtonValue(a)}/>
                <Button value={"x"} width={1} height={5} addValue={a => CalculateButtonValue(a)}/>
                <Button value={"+"} width={1} height={5} addValue={a => CalculateButtonValue(a)}/>
                <Button value={"-"} width={1} height={5} addValue={a => CalculateButtonValue(a)}/>
                <Button value={"="} width={1} height={5} color={"darkblue"} result={e => CalculateResult()}/>


            </RightPad>
        </Container>
    )
}
export default Numpad;