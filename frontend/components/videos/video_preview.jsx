import React from 'react';

export default class VideoPreview extends React.Component {
    constructor(props) {
        super(props)
        this.updateHistory = this.updateHistory.bind(this);
    }

    updateHistory() {
        this.props.history.push(`/videos/${this.props.videoId}`)
    }

    render() {
    

    return (
    <div key={this.props.videoId / 1.12 + 1} className="temp-image-container">
            <img onClick={this.updateHistory} key={this.props.videoId / 1.1 + 1} className="temp-image" src={`${this.props.thumbnail_url}`}/>
        <li key={this.props.videoId}> 
            <p onClick={this.updateHistory}> {this.props.title} </p>
        </li>
    </div>
    )
    }
}