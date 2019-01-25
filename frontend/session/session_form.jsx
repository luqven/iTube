import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUrl = `/`;
    this.props.action(this.state).then(
      () => {this.props.history.push(newUrl);}
      );
  }

  render() {
    let errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    })
    return (
      <div className="login-form-container">
        <h2>{this.props.formType}</h2>
        <p>to continue to iTube</p>
        <div className="error-message">
          <ul>
            {errors}
          </ul>
        </div>
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
            <Link className="blue-hover-btn" to={this.props.message.url}> {this.props.message.text} </Link>
            <button className="blue-btn" onClick={this.handleSubmit}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
