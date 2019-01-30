import React from 'react';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
    this.userInitial = this.props.user.username[0].toUpperCase();   
  }


  // componentDidMount(){
  //   this.props.closeModal();
  // }

  render() {    
    return (
      <div className="showpage-container">
        <div className="showpage-user-icon">
          <p>{this.userInitial}</p>
        </div>
        <p className="showpage-username">{this.state.user.username}</p>
        <section>
          <ul className="showpage-menu">
            {/* <Modal /> */}
            <li className="s-menu-selected">
              <a  href="#">Videos</a>
            </li>
            <li>
              {/* <a href="#">Channels</a> */}
              </li>
          </ul>
        </section>
      </div>
    );
  }
}
