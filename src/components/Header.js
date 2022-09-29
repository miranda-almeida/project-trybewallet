import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    const expenses = 0;
    const currency = 'BRL';
    return (
      <div>
        <h3 data-testid="email-field">{ `Olá, ${email}` }</h3>
        <h4 data-testid="total-field">{`Despesas: ${expenses}`}</h4>
        <h4 data-testid="header-currency-field">{ currency }</h4>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ email: user.email });

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
