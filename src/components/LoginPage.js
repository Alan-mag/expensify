import React from 'react';
import { connect } from "react-redux";
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  // methods
  // render
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

// export
export default connect(undefined, mapDispatchToProps)(LoginPage);