import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';

const NavBarContainer = (props, ownProps) => {
  if (props.location.pathname !== "/login" && props.location.pathname !== "/signup") {
    return (<NavBar loggedIn={props.loggedIn} user={props.user} openModal={props.openModal} closeModal={closeModal} modal={props.modal}/>)
  } else {
    return null;
  }
};

const msp = (state) => {
  
  return {
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id],
    modal: 'dropdown',
  };
};

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(msp, mdp)(NavBarContainer));