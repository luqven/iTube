import React from 'react';
class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
  }

  render(){
    return (
      <div>
        <p>Welcome {this.state} !</p>
      </div>
    )
  }
}

export default Greeting
