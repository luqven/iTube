import React from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.video

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.handleThumbnail = this.handleThumbnail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount(){
        if ( this.props.action === 'edit') { 
           this.props.getVideo(this.props.videoId)
           this.setState();
        }
    }

    handleTitleChange(e) {
        this.setState({title: e.currentTarget.value})
    }

    handleBodyChange(e) {
        this.setState({body: e.currentTarget.value})
    }

    handleVideo(e){
        let btn = this.state.btn1;
        if (e.currentTarget.files[0] != null) {btn = 'check-circle'}
        this.setState({
            video_attachment: e.currentTarget.files[0],
            channel_id: this.props.channelId,
            btn1: btn,
        })
    }

    handleThumbnail(e){
        let btn = this.state.btn2;
        if (e.currentTarget.files[0] != null) { btn = 'check-circle' }
        this.setState({
            thumbnail_attachment: e.currentTarget.files[0],
            btn2: btn,
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        if (this.props.action === 'upload') {
            formData.append('video[title]', this.state.title)
            formData.append('video[body]', this.state.body)
            formData.append('video[channel_id]', this.state.channel_id)
            formData.append('video[video_attachment]', this.state.video_attachment)
            formData.append('video[thumbnail_attachment]', this.state.thumbnail_attachment)
            this.props.addVideo(formData)
            this.props.history.push(`/`)

        } else {
            formData.append('video[title]', this.state.title)
            formData.append('video[body]', this.state.body)
            formData.append('video[id]', this.props.videoId)
            this.props.updateVideo(formData)
            this.props.history.push(`/channel/${this.state.channel_id}/${this.props.video.uploader.id}`)
        }
    }

    render() {
        let uploadInput = null;
        if (this.props.action === 'upload') {
            uploadInput =(
                <div>
                    <label className="upload-inpt-label">
                        <h2 className="video-up-btn"><FontAwesomeIcon icon={`${this.props.btn1}`} /></h2>
                        <input onChange={this.handleVideo} type="file" placeholder="video" accept=".mp4, .ogg" />
                        Select file to upload
                    </label>
                    <label className="upload-inpt-label">
                        <h2 className="video-up-btn"><FontAwesomeIcon icon={`${this.props.btn2}`} /></h2>
                        <input onChange={this.handleThumbnail} type="file" placeholder="video" accept="image/*" />
                        Select thumbnail to upload
                    </label>
                </div>
        )}
        return (
            <div className="upload-form-container">
                {uploadInput}
                <form className="form-text-inputs">
                    <label> Title
                        <textarea rows='10' onChange={this.handleTitleChange} placeholder="A title for the video" value={this.state.title}></textarea>
                    </label>
                    <label> Body
                        <textarea rows='10' onChange={this.handleBodyChange} placeholder="Description for the video" value={this.state.body}></textarea>
                    </label>
                    <p className="upload-form-error">{this.state.errors}</p>
                    <button className="btn" onClick={this.handleSubmit}>{this.props.action}</button>
                </form>
            </div>
        )
    }
}