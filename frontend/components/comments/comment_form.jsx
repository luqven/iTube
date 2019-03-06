import React from 'react'

export default class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type: props.type,
      video: props.video,
      user: props.user,
      errors: props.errors,
      comment: props.comment,
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus(){
    // redirect to login on focus if user not logged in
    if (this.state.user === undefined) { this.props.history.push('/login/')}
    // show the button
    let button1 = document.querySelector("#cancel-cmt")
    let button2 = document.querySelector("#commit-cmt")
    button1.classList.remove("hidden")
    button2.classList.remove("hidden")
  }

  handleBlur(){
    // hide the form buttons on blur
    let button1 = document.querySelector("#cancel-cmt")
    let button2 = document.querySelector("#commit-cmt")
    button1.classList.add("hidden")
    button2.classList.add("hidden")
  }

  render(){
    return(
    <form>
      <input
       onFocus={this.handleFocus}
       onBlur={this.handleBlur}
       type="text" 
       placeholder={`${this.state.type} comment`}/>
      {/* only show buttons when field is focused */}
      <button id="cancel-cmt" className="hidden">Cancel</button>
      <button id="commit-cmt" className="hidden"> {this.state.type} Comment</button>
    </form>
    )
  }
}