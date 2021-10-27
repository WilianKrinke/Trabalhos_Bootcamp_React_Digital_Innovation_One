import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    transition: all .3s ease-in-out;
    background-color: ${props => props.toggleState ? "#ff6257" : "#080808"};
    opacity: ${props => !props.teste ? "0" : "1"};
`

export const MainStyled = styled.main`
    max-width: 100vw;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    transition: all .3s ease-in-out;
    background-color: ${props => props.toggleState ? "#ff6257" : "#080808"};
    opacity: ${props => !props.teste ? "0" : "1"};
`

export const FooterStyled = styled.footer`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    transition: all .3s ease-in-out;
    background-color: ${props => props.toggleState ? "#ff6257" : "#080808"};
    opacity: ${props => !props.teste ? "0" : "1"};
`