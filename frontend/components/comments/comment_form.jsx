import React from 'react'
import ChannelIcon from "../channels/channel_icon"
import { handleKeyPress } from '../../utils/key_event_helper';

export default class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type: props.type,
      video_id: props.video_id,
      user_id: props.user_id,
      errors: props.errors,
      comment: props.comment,
      copy: Object.assign(props.comment),
      input: "",
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetComment = this.resetComment.bind(this)
  }

  handleInput(e){
    this.setState({
      comment:
       {body: e.target.value,
        user_id: this.state.user_id,
        video_id: this.state.video_id}
      })
  }

  handleFocus(){
    // redirect to login on focus if user not logged in
    if (this.state.user_id === null) { this.props.history.push('/login/')}

    // remove keybaord event listeners
    document.removeEventListener("keydown", handleKeyPress)

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
    
    // add video keyboard event listener back
    document.addEventListener("keydown", handleKeyPress)

  }

  resetComment(e){
    e.preventDefault()
    this.handleBlur()
    this.setState({
      comment: {
        body: "",
        user_id: this.props.user_id,
        video_id: this.props.video_id
      },
      input: "",
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const formComment = this.state.comment
    if (this.props.type === "comment") { this.props.addComment(formComment) }
    this.resetComment(e);
  }

  render(){
    return(
        <section className="comment-form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              onFocus={this.handleFocus}
              onBlur={()=> setTimeout(this.handleBlur, 100)}
              onChange={this.handleInput}
              type="text"
              placeholder={`add public comment`}
              value={this.state.comment.body} />
            {/* only show buttons when field is focused */}
            <button
              id="cancel-cmt"
              className=" white-btn hidden"
              onClick={this.resetComment}>
              Cancel
          </button>
            <button
              id="commit-cmt"
              className="gray-btn  hidden"
              onClick={this.handleSubmit}>
              {this.state.type}
          </button>
          </form>
        <ChannelIcon userId={this.state.user_id} />
        </section>
    )
  }
}