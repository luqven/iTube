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
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        this.props.GetCurrentUser()
    }

    handleFile(e){
        this.setState({videoFile: e.currentTarget.files[0]})
    }

    render() {
        return (
            <form className="upload-form-container">
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Body"/>
                <input onChange={this.handleFile} type="file" placeholder="video"/>
            </form>
        )
    }
}