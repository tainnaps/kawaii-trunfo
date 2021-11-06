import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      firstAtribute: '',
      secondAtribute: '',
      thirdAtribute: '',
      imgSrc: '',
      rarity: '',
      trunfo: false,
      saveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  handleClick = () => {
    console.log('Form is saved!');
  }

  render() {
    const { state, handleChange, handleClick } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ state.name }
          cardDescription={ state.description }
          cardAttr1={ state.firstAtribute }
          cardAttr2={ state.secondAtribute }
          cardAttr3={ state.thirdAtribute }
          cardImage={ state.imgSrc }
          cardRare={ state.rarity }
          cardTrunfo={ state.trunfo }
          hasTrunfo={ state.cardName }
          isSaveButtonDisabled={ state.saveButtonDisabled }
          onInputChange={ handleChange }
          onSaveButtonClick={ handleClick }
        />
        <Card
          cardName={ state.name }
          cardDescription={ state.description }
          cardAttr1={ state.firstAtribute }
          cardAttr2={ state.secondAtribute }
          cardAttr3={ state.thirdAtribute }
          cardImage={ state.imgSrc }
          cardRare={ state.rarity }
          cardTrunfo={ state.trunfo }
        />
      </div>
    );
  }
}

export default App;
