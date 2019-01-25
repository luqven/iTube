import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "../modal/modal";

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.display = false
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.display) {
      this.display = false;
      return this.props.closeModal();
    } else {
      this.display = true;
      return this.props.openModal(this.props.modal);
    }
  };

  render() {
  let drop_down;

  if (this.props.loggedIn) {
    let userInitial = this.props.user.username[0].toUpperCase();
    drop_down = (  
      <section onClick={this.handleClick} className="nav-user-icon-container">
        <div className="nav-user-icon">
          <p >{userInitial}</p>
          <Modal />
        </div>
      </section>
    )
    } else {
      drop_down = (<Link className="btn" to="/login">Sign In</Link>)
    }

  return (
    <div className="nav-container">
      <img className="logo-image" src="https://i.imgur.com/JPKhr4x.png" alt="" srcSet=""/>
      <Link to="/" className="title-logo"> iTube </Link>
      <section className="nav-auth-buttons">
        {drop_down}
      </section>
    </div>
  )
  }
}
