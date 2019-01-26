import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import DropDown from './drop_down';
import {logout} from '../../../actions/session';
import {closeModal} from "../../../actions/modal_actions";


const msp = state => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(DropDown));