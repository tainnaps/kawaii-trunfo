import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { props } = this;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            data-testid="name-input"
            value={ props.cardName }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            name="description"
            data-testid="description-input"
            value={ props.cardDescription }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          1º atributo
          <input
            id="attr1"
            name="attr1"
            type="number"
            data-testid="attr1-input"
            value={ props.cardAttr1 }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          2º atributo
          <input
            id="attr2"
            name="attr2"
            type="number"
            data-testid="attr2-input"
            value={ props.cardAttr2 }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          3º atributo
          <input
            id="attr3"
            name="attr3"
            type="number"
            data-testid="attr3-input"
            value={ props.cardAttr3 }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            id="image"
            name="image"
            type="text"
            data-testid="image-input"
            value={ props.cardImage }
            onChange={ props.onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            id="rarity"
            name="rarity"
            data-testid="rare-input"
            value={ props.cardRare }
            onChange={ props.onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {props.hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              id="trunfo"
              name="trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ props.cardTrunfo }
              onChange={ props.onInputChange }
            />
          </label>)}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ props.isSaveButtonDisabled }
          onClick={ props.onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
