import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  askToFixed = (ask) => Number(ask).toFixed(2);

  compile = (ask, value) => (Number(ask) * Number(value)).toFixed(2);

  render() {
    const { expenses } = this.props;
    return (
      <table>
        {/* ajustando nomenclatura de tags a partir do erro indicado no console. ref: https://stackoverflow.com/questions/43958700/react-error-th-cannot-appear-as-a-child-of-thead-see-unknown-thead-th */}
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          { expenses.map((element) => (
            <tr key={ element.id }>
              <td>{ element.description }</td>
              <td>{ element.tag }</td>
              <td>{ element.method }</td>
              <td>{ Number(element.value).toFixed(2) }</td>
              <td>{ element.exchangeRates[element.currency].name }</td>
              <td>{ this.askToFixed(element.exchangeRates[element.currency].ask) }</td>
              <td>
                { this.compile(element.exchangeRates[element
                  .currency].ask, element.value) }
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Table);
