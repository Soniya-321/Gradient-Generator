// Style your elements here
import styled from 'styled-components'

export const LiItem = styled.li`
list-style-type: none;
    
`
export const DirectionBtn = styled.button`
text-align: center;
    padding: 10px;
    margin: 0px 10px 10px 0px;
    border: none;
    width: 120px;
    border-radius: 4px;
    background-color: #ffffff;
    color: #334155;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    opacity: ${props => (props.isActive ? '1' : '0.5')};
`
