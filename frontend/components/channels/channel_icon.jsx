import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';

export class ChannelIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.getUser(this.props.userId);
  };



  render() {
  if ( this.props.users[this.props.userId]) {
    let user = this.props.users[this.props.userId];
    let initials = user.username[0].toUpperCase();
    return(
      <div className="channel-icon-container">
        <div className="channel-icon">
          <p>{initials}</p>
        </div>
        <p className="channel-name">{user.username}</p>
      </div>
    )};
  return null};
}

const msp = state => {
  return {
    users: state.entities.users
  }
}

const mdp = dispatch => {
  return {
    getUser: (id) => dispatch(getUser(id)),
  }
}

export default connect(msp, mdp)(ChannelIcon);