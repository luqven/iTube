import React from 'react';

export default class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body:"",
            channel_id: null,
            videoFile: null
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.GetCurrentUser()
    }

    handleTitleChange(e) {
        this.setState({title: e.currentTarget.value})
    }

    handleBodyChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    handleFile(e){
        this.setState({videoFile: e.currentTarget.files[0]})
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[body]', this.state.body)
        formData.append('video[videoFile]', this.state.videoFile)

        this.props.saveVideo(formData).then((response) => console.log(response.message));
    }

    render() {
        return (
            <form className="upload-form-container">
                <input onChange={this.handleTitleChange} type="text" placeholder="Title"/>
                <input onChange={this.handleBodyChange} type="text" placeholder="Body"/>
                <input onChange={this.handleFile} type="file" placeholder="video"/>
                <button className="btn" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}