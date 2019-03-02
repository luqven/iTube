import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.testUser = {
      username: 'Guest',
      password: 'hunter12',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignIn = this.guestSignIn.bind(this);
    this.moveLabel = this.moveLabel.bind(this);
  }

  componentDidMount(){
    this.props.resetErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  moveLabel(type){
    return (e) => {
      const username = document.querySelector("#namelabel")
      const password = document.querySelector("#passlabel")
      debugger
      if (type === "username") {
        username.classList.add("field-selected")
        password.classList.remove("field-selected")
        }
      else if (type === "password") {
        username.classList.remove("field-selected")
        password.classList.add("field-selected")
      } else {
        username.classList.remove("field-selected")
        password.classList.remove("field-selected")
      }
    }
  }

  guestSignIn(e) {
    const newUrl = `/`;
    this.props.action(this.testUser).then(
      () => { this.props.history.push(newUrl); }
    );
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
      <div className="form-background">
        <div className="login-form-container">
          <Link to="/" className="title-logo"> <FontAwesomeIcon icon={["fab", "youtube"]} /> iTube </Link>
          <h2>{this.props.formType}</h2>
          <p>to continue to iTube</p>
          <div className="error-message">
            <ul>
              {errors}
            </ul>
          </div>
          <form className="session-form">
            <label className="username-label"> <p id="namelabel">Username</p>
            <input
                className="form-input"
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                onFocus={this.moveLabel("username")}
                onBlur={this.moveLabel()}
              /></label>
            <label className="password-label"> <p id="passlabel">Password</p>
            <input
                className="form-input"
                placeholder="Passowrd"
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                onFocus={this.moveLabel("password")}
                onBlur={this.moveLabel()}
              /></label>
            <p>Just want to check things out? Sign in as Guest privately.</p>
            <a onClick={this.guestSignIn} className="blue-hover-btn  guest-btn" href="#">Guest sign in</a>
            <div className="form-submit-container">
              <Link className="blue-hover-btn" to={this.props.message.url}> {this.props.message.text} </Link>
              <button className="blue-btn" onClick={this.handleSubmit}>Next</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
