import React from 'react'
import ChannelIcon from "../channels/channel_icon"
import CommentForm from "./comment"


export default class CommentsShow extends React.Component {
  constructor(props){
    super(props)
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount(){
    this.props.getComments(this.props.video_id)
  }

  handleMouseOver(e) {
    let ele = e.currentTarget
    let btn = e.currentTarget.children[2]
    this.CommentText = e.currentTarget.children[1]
    if (ele.id.includes(String(this.props.session_id))) {
      btn.classList.remove("hidden")
    }
  }

  render(){
    let comments;
    if (this.props.comments.length !== 0) {
      comments = this.props.comments.map((comment, id) => {
        if (comment === null) {return}
        return (
        <li
          onMouseEnter={this.handleMouseOver}
          className="comment-body-container" 
          key={id}
          id={`cmt-${id}-user-${comment.user_id}`}>
          <ChannelIcon userId={comment.user_id} />
          <CommentForm comment={comment} type={'show'} updateComment={this.props.updateComment} />
        </li>)
      }) 
    } else {
      comments = null;
    }
    return(
      <section className="comments-container">
        <p className="comment-show-title">Comments</p>
        <ul>
          {comments}
        </ul>
      </section>
    )
  }
}