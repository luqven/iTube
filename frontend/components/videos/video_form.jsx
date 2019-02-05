import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body:"",
            channel_id: null,
            video_attachment: null,
            thumbnail_attachment: null,
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.handleThumbnail = this.handleThumbnail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleTitleChange(e) {
        this.setState({title: e.currentTarget.value})
    }

    handleBodyChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    handleVideo(e){
        this.setState({
            video_attachment: e.currentTarget.files[0],
            channel_id: this.props.channelId,
        })
    }

    handleThumbnail(e){
        this.setState({
            thumbnail_attachment: e.currentTarget.files[0],
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[body]', this.state.body)
        formData.append('video[channel_id]', this.state.channel_id)
        formData.append('video[video_attachment]', this.state.video_attachment)
        formData.append('video[thumbnail_attachment]', this.state.thumbnail_attachment)


        this.props.addVideo(formData)
        this.props.history.push(`/channel/${this.state.channel_id}`)
    }

    render() {
        return (
            <div className="upload-form-container">
                <label className="upload-inpt-label">
                    <h2 className="video-up-btn"><FontAwesomeIcon icon="upload" /></h2>
                    <input onChange={this.handleVideo} type="file" placeholder="video" accept=".mp4, .ogg" />
                    Select file to upload
                </label>
                <label className="upload-inpt-label">
                    <h2 className="video-up-btn"><FontAwesomeIcon icon="file-image" /></h2>
                    <input onChange={this.handleThumbnail} type="file" placeholder="video" accept="image/*"/>
                    Select thumbnail to upload
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