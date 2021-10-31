import React from 'react';
import propTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';
import { RestaurantCardStyled, RestaurantInfo, RestaurantPhoto } from './styled';

const RestaurantCard = ({ titulo, rating, endereco, photo }) => {
  return (
    <RestaurantCardStyled>
      <RestaurantInfo>
        <h2>{titulo}</h2>
        <span>
          <ReactStars count={5} isHalf value={rating} size={20} activeColor="#ffd700" edit={false} />
        </span>
        <p>{endereco}</p>
      </RestaurantInfo>
      <RestaurantPhoto>
        <div>{photo}</div>
      </RestaurantPhoto>
    </RestaurantCardStyled>
  );
};

RestaurantCard.propTypes = {
  titulo: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  endereco: propTypes.string.isRequired,
  photo: propTypes.any,
};

export default RestaurantCard;
