import React, { Component } from 'react';

class Table extends Component {
  render() {
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
      </table>
    );
  }
}

export default Table;
