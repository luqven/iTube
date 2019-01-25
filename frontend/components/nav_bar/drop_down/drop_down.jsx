import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class DropDown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      className: 'hidden',
      user: this.props.user
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let clicked = !(this.state.clicked);
    if (!clicked){
      this.setState({
        clicked: clicked,
        className: 'dropdown',
      });
    } else {
    this.setState({
      clicked: clicked,
      className: 'hidden',
    });
    }
  }

  render() {
    let userInitial = this.props.user.username[0];
    return(
      <section className="nav-user-icon-container">
        <div onClick={this.handleClick} className="nav-user-icon">
          <p>{userInitial}</p>          
        </div>
        <ul className={this.state.className}>
          <li>
            <div onClick={this.handleClick} className="dropdown-user-icon">
              <p className="user-initial">{userInitial}</p>
              {this.props.user.username}
            </div>
          </li>
          <li>
            <div className="dropdown-icon-container">
              <FontAwesomeIcon icon="user-circle" />
              <Link className="dropdown-li-ele" to={`/users/${this.state.user.username}/`}>My channel</Link>
            </div>
          </li>
          <li> 
            <div className="dropdown-icon-container">
              <FontAwesomeIcon icon="sign-out-alt" />
              <a onClick={this.props.logout} href="#"> Sign out </a>
            </div> 
          </li>
        </ul>
      </section>
    )
  }
}