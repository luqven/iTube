import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropDown from "../modal/modal";
import UploadButton from "./upload_button";
import LogoButton from "./logo_button";
import SearchBar from "./search/search_container";


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
  let RightHandButtons;

  if (this.props.loggedIn) {
    let userInitial = this.props.user.username[0].toUpperCase();
    RightHandButtons = (
      <div className="dropdown-btns">
        {/* menu bar upload button */}
        <UploadButton />
        {/* dropdown button & actions seciton */}
        <section onClick={this.handleClick} className="nav-user-icon-container">
          <div className="nav-user-icon">
            <p >{userInitial}</p>
            <DropDown />
          </div>
        </section>
      </div>
    )
    } else {
      RightHandButtons = (<Link className="btn" to="/login">Sign In</Link>)
    }

  return (
    <div className="nav-container">
    {/* left hand side logo button */}
      <section className="title-logo"> 
         <LogoButton />
      </section>
      {/* search bar */}
        <SearchBar />
      {/* right ahnd drop down and buttons */}
      <section className="nav-auth-buttons">
        {RightHandButtons}
      </section>
    </div>
  )
  }
}
