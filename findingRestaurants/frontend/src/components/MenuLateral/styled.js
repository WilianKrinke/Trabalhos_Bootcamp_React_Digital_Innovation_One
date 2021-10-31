import styled from 'styled-components'

export const MenuContainer = styled.nav`
  height: 100vh;
  width: 30vw;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 5px;
  background-color: #FBF5E4;

  ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-track{
    background-color: #FBF5E4;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #B5ADCB;
    border-radius: 25px;
  }
`