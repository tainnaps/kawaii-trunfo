import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { label, id, type, dataTestId } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          id={ id }
          type={ type }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default FormInput;
