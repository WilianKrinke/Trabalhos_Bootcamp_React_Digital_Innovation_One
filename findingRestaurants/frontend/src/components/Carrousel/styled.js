import styled from 'styled-components'
import Slider from 'react-slick';

export const CarrouselContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

export const CarrouselTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
`

export const Item = styled.div`
  text-align: center;
  height: 120px;
  margin: 0px 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: darkgrey;
  background-image: url(${props => props.image});
  text-align: center;
  h3{
    color: antiquewhite;
  }
`

export const Carousel = styled(Slider)`
  width: 100%;
`