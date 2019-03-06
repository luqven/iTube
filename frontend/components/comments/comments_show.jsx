import React from 'react'
import ChannelIcon from "../channels/channel_icon"


export default class CommentsShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getComments(this.props.video_id)
  }

  render(){
    let comments;
    if (this.props.comments.length !== 0) {
      comments = this.props.comments.map((comment, id) => {
        if (comment === null) {return}
        return (
        <li 
          className="comment-body-container" 
          key={id}>
          <ChannelIcon userId={comment.user_id} />
            <p className="comment-body">{comment.body}</p>
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