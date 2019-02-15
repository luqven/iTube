import React from 'react';

export default class UserCircle extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`channel/${this.props.users[this.props.userId].channel_id}/${this.props.userId}`)
  };

  render() {
    let userInitial;
    if (Object.values(this.props.users).length >= 1) {
      const user = this.props.users[this.props.userId]
      userInitial = user.username[0].toUpperCase();
      return (
        <>
          {/* <div onClick={this.handleClick} className="dropdown-user-icon">
            <h3 className="home-user-initial" >{userInitial}</h3>
          </div> */}
          <h3 onClick={this.handleClick} className="user-initial" >{user.username}</h3>
        </>
      )
    }

    return null;
  }
}