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
  }

  render(){
    return(
    <form>
      <input type="text" placeholder={`${this.state.type} comment`}/>
      {/* only show buttons when field is focused */}
      <button id="cancel-cmt" className="hidden">Cancel</button>
      <button id="commit-cmt" className="hidden">Comment</button>
    </form>
    )
  }
}