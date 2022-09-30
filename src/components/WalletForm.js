import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>

        <form>
          <input
            type="number"
            data-testid="value-input"
            placeholder="Valor gasto"
          />

          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
          />

          <select data-testid="currency-input">
            { currencies.map((currency) => (
              <option key={ currency }>
                { currency }
              </option>
            ))}
          </select>

          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.string,
}.isRequired;

// export default WalletForm;
export default connect(mapStateToProps)(WalletForm);
