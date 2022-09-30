import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { actionAPI } from '../redux/actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>TrybeWallet</h1>
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(actionAPI()),
});

Wallet.propTypes = {
  fetchAPI: PropTypes.func,
}.isRequired;

// export default Wallet;
export default connect(null, mapDispatchToProps)(Wallet);
