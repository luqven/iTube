import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // fn handles all form inputs by 'type'
  handleInput(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state).then( () =>
      this.props.history.push('/') // reidrect to home page on succesful login
    );
  }

  render() {
    return (
      <div className="session-form">
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit} action="">
          <label>Username:
            <input onChange={this.handleInput('username')} type="text" value={this.state.username}/> 
          </label>
          <label>Password:
            <input onChange={this.handleInput('password')} type="password" value={this.state.password}/> 
          </label>
          <input type="submit"/> Sign up.
        </form>
      </div>
    )
  }
}

export {Signup};