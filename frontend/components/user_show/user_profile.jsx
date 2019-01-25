import React from 'react';
import Modal from "../modal/modal";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: this.props.user};
    this.userInitial = this.props.user.username[0].toUpperCase();   
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
        <p>{this.state.user.username}</p>
        <section>
          <ul className="showpage-menu">
            {/* <Modal /> */}
            <li><a href="#">Videos</a></li>
            <li><a href="#">Channels</a></li>
          </ul>
        </section>
        <section className="categories">
          {/* <Modal /> */}
        </section>
      </div>
    );
  }
}
