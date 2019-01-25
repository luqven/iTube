import React from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: this.props.user};
    this.userInitial = this.props.user.username[0];   
  }

  handleEventType(type) {
    return ''
  }

  render() {
    return (
      <div className="showpage-container">
        <div className="showpage-user-icon">
          <p>{this.userInitial}</p>
        </div>
      </div>
    );
  }
}
