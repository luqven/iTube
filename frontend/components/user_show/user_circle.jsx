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
    this.props.history.push(`/channel/${this.props.users[this.props.userId].channel_id}/${this.props.userId}`)
  };

  render() {
    if (this.props.users && this.props.users[this.props.userId]) {
      const user = this.props.users[this.props.userId]
      return (
        <>
          <h3 onClick={this.handleClick} className="user-initial" >{user.username}</h3>
        </>
      )
    }

    return null;
  }
}