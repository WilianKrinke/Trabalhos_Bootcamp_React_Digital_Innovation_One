import styled from 'styled-components'

export const RestaurantCardStyled = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row nowrap;
  border-left: 3px solid transparent;
  transition: all .1s ease-in-out;

  :hover{
    border-left: 3px solid #BD9CBD;
    background-color: #EAE5DB;
  }
`

export const RestaurantInfo = styled.div`
  
  padding: 5px 10px;
  text-align: left;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  p{
    font-size: 14px;
    color: #151912;
  }
`

export const RestaurantPhoto = styled.div`
  border: 1px solid;
  margin: auto 0px;
  border-radius: 10px;
  height: 100px;
`