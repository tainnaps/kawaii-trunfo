import React from 'react';
import PropTypes from 'prop-types';
const DEFAULT_IMG = 'https://cdn.pixabay.com/photo/2016/12/18/13/44/download-1915749_960_720.png';

class Card extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="card">
        <h3 data-testid="name-card">{ props.cardName }</h3>
        <img
          src={ !props.cardImage ? DEFAULT_IMG : props.cardImage }
          alt={ props.cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ props.cardDescription }</p>
        <div className="card-attributes">
          <p className="attribute-name">
          Attr01....................................
            <span data-testid="attr1-card">{ props.cardAttr1 }</span>
          </p>
          <p className="attribute-name">
          Attr02....................................
            <span data-testid="attr2-card">{ props.cardAttr2 }</span>
          </p>
          <p className="attribute-name">
          Attr03....................................
            <span data-testid="attr3-card">{ props.cardAttr3 }</span>
          </p>
        </div>
        <p data-testid="rare-card">{ props.cardRare }</p>
        {props.cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
