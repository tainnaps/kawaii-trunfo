import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
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
    link: https://trybecourse.slack.com/archives/C02B4PPBERE/p1636386780255600
    */
    this.setState({ [target.name]: value }, () => this.validateSaveButton());
  }

  handleSaveButtonClick = (event) => {
    event.preventDefault();

    const { name, description, attr1, attr2, attr3,
      image, rarity, trunfo, savedCards } = this.state;

    const newCard = { name, description, attr1, attr2, attr3, image, rarity, trunfo };

    if (trunfo) this.setState({ trunfo: false, hasTrunfo: true });

    this.setState((state) => (
      {
        savedCards: savedCards.length === 0 ? [newCard] : [...state.savedCards, newCard],
        name: '',
        description: '',
        image: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        rarity: 'normal',
      }
    ));
  }

  handleDeleteButtonClick = ({ target }) => {
    const { savedCards } = this.state;
    const cardId = target.parentElement.id;
    const card = savedCards.find(({ name }) => name === cardId);

    if (card.trunfo) this.setState({ trunfo: false, hasTrunfo: false });

    this.setState((state) => (
      {
        /*
        Consultei o link abaixo para checar como remover um item de um array.
        link: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        */
        savedCards: state.savedCards.filter(({ name }) => name !== cardId),
      }
    ));
  }

  render() {
    const { state, handleChange, handleSaveButtonClick, handleDeleteButtonClick } = this;
    return (
      <div>
        <header className="page-header white-background display-row">
          <h1>(＾▽＾) Kawaii Trunfo (＾▽＾)</h1>
        </header>
        <section className="new-card-section">
          <section
            className="pink-background display-column add-card-section vertical-padding-5"
          >
            <h1>Adicionar nova carta</h1>
            <Form
              cardName={ state.name }
              cardDescription={ state.description }
              cardAttr1={ state.attr1 }
              cardAttr2={ state.attr2 }
              cardAttr3={ state.attr3 }
              cardImage={ state.image }
              cardRare={ state.rarity }
              cardTrunfo={ state.trunfo }
              hasTrunfo={ state.hasTrunfo }
              isSaveButtonDisabled={ state.isSaveButtonDisabled }
              onInputChange={ handleChange }
              onSaveButtonClick={ handleSaveButtonClick }
            />
          </section>
          <section className="display-column card-preview-section vertical-padding-5">
            <h1>Pré-visualização</h1>
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
          </section>
        </section>
        {state.savedCards.length !== 0 && (
          <section className="saved-cards-section display-column vertical-padding-5">
            <h1>Cartas Salvas</h1>
            <section className="saved-cards">
              {state.savedCards.map((savedCard) => (
                <div
                  key={ savedCard.name }
                  id={ savedCard.name }
                  className="display-column saved-card"
                >
                  <Card
                    cardName={ savedCard.name }
                    cardDescription={ savedCard.description }
                    cardAttr1={ savedCard.attr1 }
                    cardAttr2={ savedCard.attr2 }
                    cardAttr3={ savedCard.attr3 }
                    cardImage={ savedCard.image }
                    cardRare={ savedCard.rarity }
                    cardTrunfo={ savedCard.trunfo }
                  />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ handleDeleteButtonClick }
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </section>
          </section>)}
      </div>
    );
  }
}

export default App;
