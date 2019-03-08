import React from 'react'

export default class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state = {comment: props.comment, type: props.type}
    this.editClick = this.editClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    let formComment = this.state.comment
    formComment.body = e.target.value
    this.setState({comment: formComment})
  }

  saveClick(e){
    e.preventDefault()
    this.handleSubmit()
    this.saveBtn.classList.toggle("hidden")
    this.formField.classList.toggle("hidden")
    this.setState({type: "show"})
  }

  handleSubmit(){
    let result = { comment: this.state.comment }
    // debugger
    this.props.updateComment(this.state.comment)
  }

  editClick(e) {
    e.preventDefault()
    this.saveBtn = e.target.parentElement.children[1]
    this.formField = e.target.parentElement.children[3]

    this.saveBtn.classList.toggle("hidden")
    this.formField.classList.toggle("hidden")
    if (this.state.type === "edit"){
      this.setState({ type: "show" })
    } else {
      this.setState({ type: "edit" })
    }
  }

  render(){
    let commentForm = <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleInput} type="text" value={this.state.comment.body} />
                      </form>
    let commentBody = <p className="comment-body">{this.state.comment.body}</p>
    let component;
    if (this.state.type === 'edit') {component = commentForm}
    else {component = commentBody}
    return(
      <>
      {component}
      <button
        onClick={this.editClick}
        className="white-btn hidden">
        edit
      </button>
      <button
        onClick={this.saveClick}
        className="gray-btn hidden">
        save
      </button>
      </>
    )
  }
}