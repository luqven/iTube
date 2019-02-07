import React from 'react';

export default class UserCircle extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  render() {
    let userInitial;
    if (Object.values(this.props.users).length > 1) {
      let user = this.props.users[this.props.userId]
      userInitial = user.username[0].toUpperCase();
      return (
        <div className="dropdown-user-icon">
          <p>{userInitial}</p>
        </div>
      )
    }

    return null;
  }
}