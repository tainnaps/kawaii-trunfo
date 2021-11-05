import React from 'react';
import FormInput from './FormInput';

class Form extends React.Component {
  render() {
    return (
      <section className="add-card-form">
        <h1>Adicionar nova carta</h1>
        <form>
          <FormInput
            label="Nome"
            id="name"
            type="text"
            dataTestId="name-input"
          />
          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              data-testid="description-input"
            />
          </label>
          <FormInput
            label="1º atributo"
            id="first-atribute"
            type="number"
            dataTestId="attr1-input"
          />
          <FormInput
            label="2º atributo"
            id="second-atribute"
            type="number"
            dataTestId="attr2-input"
          />
          <FormInput
            label="3º atributo"
            id="third-atribute"
            type="number"
            dataTestId="attr3-input"
          />
          <FormInput
            label="Imagem"
            id="img-src"
            type="text"
            dataTestId="image-input"
          />
          <label htmlFor="rarity">
            Raridade
            <select id="rarity" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <FormInput
            label="Super Trunfo"
            id="trunfo-checkbox"
            type="checkbox"
            dataTestId="trunfo-input"
          />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
