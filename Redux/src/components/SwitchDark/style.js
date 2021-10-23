import styled from 'styled-components'

export const SwitchButtonStyled = styled.div`
    border: 1px solid ${props => props.toggleState ? "#000" : "#fff"};
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    div{
        height: 26px;
        width: 26px;
        border: 1px solid ${props => props.toggleState ? "#000" : "#fff"};
        border-radius: 50%;
        position: relative;
        transition: all .3s ease-in-out;
        left: ${props => props.toggleState ? "25px" : "-25px"};
    }
`