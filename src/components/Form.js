import React from 'react';

import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { props } = this;
    return (
      <section className="add-card-form">
        <h1>Adicionar nova carta</h1>
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
          <label htmlFor="firstAtribute">
            1º atributo
            <input
              id="firstAtribute"
              name="firstAtribute"
              type="number"
              data-testid="attr1-input"
              value={ props.cardAttr1 }
              onChange={ props.onInputChange }
            />
          </label>
          <label htmlFor="secondAtribute">
            2º atributo
            <input
              id="secondAtribute"
              name="secondAtribute"
              type="number"
              data-testid="attr2-input"
              value={ props.cardAttr2 }
              onChange={ props.onInputChange }
            />
          </label>
          <label htmlFor="thirdAtribute">
            3º atributo
            <input
              id="thirdAtribute"
              name="thirdAtribute"
              type="number"
              data-testid="attr3-input"
              value={ props.cardAttr3 }
              onChange={ props.onInputChange }
            />
          </label>
          <label htmlFor="imgSrc">
            Imagem
            <input
              id="imgSrc"
              name="imgSrc"
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
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ props.isSaveButtonDisabled }
            onClick={ props.onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
