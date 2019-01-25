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
        <section className="categories">
          <ul>
            {/* <Modal /> */}
          </ul>
        </section>
      </div>
    );
  }
}
