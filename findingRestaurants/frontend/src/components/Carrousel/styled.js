import styled from 'styled-components'

export const CarrouselContainer = styled.div`
  border: 1px solid;
  height: 170px;
`

export const CarrouselTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
`

export const Item = styled.div`
  text-align: center;
  height: 120px;
`