import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
    let userInitial = this.props.user.username[0].toUpperCase();
    return(
      <section>
        <ul className="dropdown">
          <li>
            <div onClick={this.handleClick} className="dropdown-user-icon">
              <p>{userInitial}</p>
              <p className="user-initial">{this.props.user.username}</p>
            </div>
          </li>
          <li>
            <div className="dropdown-icon-container">
              <FontAwesomeIcon icon="user-circle" />
              <Link className="dropdown-li-ele" to={`/users/profile/`}>My channel</Link>
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