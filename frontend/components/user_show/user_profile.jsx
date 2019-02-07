import React from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.getUser(this.props.userId);
  }

  render() {
    if (this.props.user) {
      const user = this.props.user
      const initials = user.username[0].toUpperCase();
      return (
        <div className="showpage-container">
          <div className="showpage-user-icon">
            <p>{initials}</p>
          </div>
          <p className="showpage-username">{user.username}</p>
          <section>
            <ul className="showpage-menu">
              {/* <Modal /> */}
              <li className="s-menu-selected">
                <a href="#">Videos</a>
              </li>
              <li>
                {/* <a href="#">Channels</a> */}
              </li>
            </ul>
          </section>
        </div>
      );
    }
    return null;
  }
}
