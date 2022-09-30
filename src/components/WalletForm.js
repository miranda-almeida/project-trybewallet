import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestConversion } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  toOnChange = ({ target: { name, value } }) => { this.setState({ [name]: value }); };

  submitBtn = () => {
    const { save } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    this.setState((state) => ({ id: state.id + 1 }));
    save({ id, value, description, currency, method, tag });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>

        <form>
          <input
            type="number"
            data-testid="value-input"
            placeholder="Valor gasto"
            value={ value }
            name="value"
            onChange={ this.toOnChange }
          />

          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            value={ description }
            name="description"
            onChange={ this.toOnChange }
          />

          <select
            data-testid="currency-input"
            value={ currency }
            name="currency"
            onChange={ this.toOnChange }
          >
            { currencies.map((element) => (
              <option key={ element }>
                { element }
              </option>
            ))}
          </select>

          <select
            data-testid="method-input"
            value={ method }
            name="method"
            onChange={ this.toOnChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            data-testid="tag-input"
            value={ tag }
            name="tag"
            onChange={ this.toOnChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

          <button
            type="button"
            onClick={ () => this.submitBtn() }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  save: (expense) => dispatch(requestConversion(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.string,
}.isRequired;

// export default WalletForm;
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
