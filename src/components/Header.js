import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  makeConversion = () => {
    const { expenses } = this.props;
    const compile = expenses.reduce((accumulator, currentValue) => {
      const coin = currentValue.currency;
      // console.log(coin);
      if (coin !== 'USDT') {
        const calculate = Number(currentValue
          .exchangeRates[coin].ask) * Number(currentValue.value);
        // console.log(calculate);
        return accumulator + Number(calculate);
      }
      return accumulator;
    }, 0);
    return Number(compile).toFixed(2);
  };

  render() {
    const { email } = this.props;
    // const expenses = 0;
    return (
      <div>
        <h3 data-testid="email-field">{ `Olá, ${email}` }</h3>
        <h4 data-testid="total-field">{ this.makeConversion() }</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email, expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
