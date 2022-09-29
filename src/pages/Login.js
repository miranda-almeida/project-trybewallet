import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validateLogin } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  submitBtn = (email) => {
    const { validateEmail, history } = this.props;
    validateEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const mailFormat = /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
    const min = 6;

    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          value={ email }
          data-testid="email-input"
          placeholder="Email"
          onChange={ ({ target: { value } }) => this.setState({ email: value }) }
        />

        <input
          type="password"
          value={ password }
          data-testid="password-input"
          placeholder="Senha"
          onChange={ ({ target: { value } }) => this.setState({ password: value }) }
        />

        <button
          type="button"
          disabled={ !(mailFormat.test(email) && password.length >= min) }
          onClick={ () => this.submitBtn(email) }
        >
          Entrar
        </button>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  validateEmail: (email) => dispatch(validateLogin(email)),
});

Login.propTypes = {
  validateEmail: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

// export default Login;
export default connect(null, mapDispatchToProps)(Login);
