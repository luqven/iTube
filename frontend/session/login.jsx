import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: this.props.errors.errors
    };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ errors: this.props.errors.errors});
    this.props.login(this.state).then(
      () => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="login-form-container">
        <h2>Sign in</h2>
        <p>to continue to iTube</p>
        <p>{this.state.errors}</p>
        <form className="session-form">
          <input
              className="form-input"
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          <input
              className="form-input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          <div className="form-submit-container">
            <Link className="blue-hover-btn" to="/signup"> Create account</Link>
            <button className="blue-btn" onClick={this.handleSubmit}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
