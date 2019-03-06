import React from 'react'

export default class CommentsShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {comments: null}
  }

  componentDidMount(){
    this.props.getComments(this.props.video_id)
  }

  render(){
    let comments;
    if (this.props.comments !== undefined) {
      comments = this.props.comments.map((comment, id) => {
        return <li key={id}>{comment.body}</li>
      }) 
    } else {
      comments = null;
    }
    debugger
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