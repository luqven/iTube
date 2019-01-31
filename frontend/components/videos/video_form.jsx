import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body:"",
            channel_id: null,
            video_attachment: null
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    // }

    handleTitleChange(e) {
        this.setState({title: e.currentTarget.value})
    }

    handleBodyChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    handleFile(e){
        this.setState({
            video_attachment: e.currentTarget.files[0],
            channel_id: this.props.channelId,
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[body]', this.state.body)
        formData.append('video[channel_id]', this.state.channel_id)
        formData.append('video[video_attachment]', this.state.video_attachment)

        // return $.ajax({
        //     url: `/api/videos/`,
        //     method: 'post',
        //     data: formData,
        //     contentType: false,
        //     processData: false,
        // })

        this.props.addVideo(formData)
        this.props.history.push(`/channel/${this.state.channel_id}`)
    }

    render() {
        return (
            <div className="upload-form-container">
                <label className="upload-inpt-label">
                    <h2 className="video-up-btn"><FontAwesomeIcon icon="upload" /></h2>
                    <input onChange={this.handleFile} type="file" placeholder="video" accept=".mp4, .ogg" />
                    Select file to upload
                </label>
                <form className="form-text-inputs">
                    <input onChange={this.handleTitleChange} type="text" placeholder="Title" />
                    <input onChange={this.handleBodyChange} type="text" placeholder="Description" />
                    <button className="btn" onClick={this.handleSubmit}>Upload</button>
                </form>
            </div>
        )
    }
}