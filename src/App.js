import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rarity: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validateSaveButton = () => {
    const { name, description, attr1, attr2, attr3, image, rarity } = this.state;
    const parsedAttr1 = parseInt(attr1, 10);
    const parsedAttr2 = parseInt(attr2, 10);
    const parsedAttr3 = parseInt(attr3, 10);
    const maxSum = 210;
    const maxValue = 90;
    if ((parsedAttr1 + parsedAttr2 + parsedAttr3 <= maxSum)
      && (parsedAttr1 >= 0 && parsedAttr1 <= maxValue)
      && (parsedAttr2 >= 0 && parsedAttr2 <= maxValue)
      && (parsedAttr3 >= 0 && parsedAttr3 <= maxValue)
      && (name !== '')
      && (description !== '')
      && (image !== '')
      && (rarity !== '')
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    /*
    Utilizei a sugestão do Sugano, na thread abaixo, para que minha função de validação fosse executada com os dados do state atualizados.
    ref: https://trybecourse.slack.com/archives/C02B4PPBERE/p1636386780255600
    */
    this.setState({ [target.name]: value }, () => this.validateSaveButton());
  }

  handleClick = () => {
    console.log('Form is saved!');
  }

  render() {
    const { state, handleChange, handleClick } = this;
    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ state.name }
          cardDescription={ state.description }
          cardAttr1={ state.attr1 }
          cardAttr2={ state.attr2 }
          cardAttr3={ state.attr3 }
          cardImage={ state.image }
          cardRare={ state.rarity }
          cardTrunfo={ state.trunfo }
          hasTrunfo={ state.cardName }
          isSaveButtonDisabled={ state.isSaveButtonDisabled }
          onInputChange={ handleChange }
          onSaveButtonClick={ handleClick }
        />
        <Card
          cardName={ state.name }
          cardDescription={ state.description }
          cardAttr1={ state.attr1 }
          cardAttr2={ state.attr2 }
          cardAttr3={ state.attr3 }
          cardImage={ state.image }
          cardRare={ state.rarity }
          cardTrunfo={ state.trunfo }
        />
      </>
    );
  }
}

export default App;
