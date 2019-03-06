import React from 'react'

export default class CommentsShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.props.getComments(this.props.video_id)
  }

  render(){
    return(
      <section className="comments-container">
        <ul>
          <li>comments</li>
        </ul>
      </section>
    )
  }
}