// Style your elements here
import styled from 'styled-components'

export const Maincontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-image: ${props => props.background};
    font-family: 'Roboto';
`
export const MainHeading = styled.h1`
    color:  #ffffff;
    font-size: 20px;
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
`
export const DirectionPara = styled.p`
    color: #ffffff79;
    font-size: 14px;
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
`
export const UlContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px;

`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
`

export const ColorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px 20px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 12px 20px;
`

export const ColorPara = styled.p`
    font-size: 14px;
    color: #ffffff;
    margin-top: 2px;
    margin-bottom: 15px;
`
export const Input = styled.input`
    padding: 10px 27px;
    background-color: ${props => props.bgColor};
    border: 1px #334155 solid;
    color: ${props => props.bgolor};
    text-decoration: none;
`
export const Button = styled.button`
    padding: 8px 10px;
    width: 110px;
    color: #1e293b;
    background-color: #00c9b7;
    border: none;
    border-radius: 8px;
    margin: 10px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
`
