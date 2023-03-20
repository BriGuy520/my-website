import React, { Component } from 'react';

class FileInput extends Component {

  constructor(props){
    super(props);

    this.state = {fileContent: '', text: ''}

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.getSignedRequest = this.getSignedRequest.bind(this);

  }

  uploadFile(file, signedRequest, url){
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          console.log(url);
        }
        else{
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  getSignedRequest(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          const response = JSON.parse(xhr);

          // console.log(response);
          // this.uploadFile(file, response.signedRequest, response.url);
        }
        else{
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }
  
  handleFileInputChange(event){
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    if(file == null){
      return alert("No file uploaded!");
    }

    console.log(file);

    this.getSignedRequest(file);

    reader.onload = () => {
      this.setState({ fileContent: reader.result });
    };
    reader.readAsText(file);
  }

  handleTextChange(event){
    event.preventDefault();

    this.setState({text: event.target.value});
  }
  
  
  render(){

    const { input, label, meta: {error, touched} } = this.props;
    
    const inputType = () => {

      if(label === "Image"){
        return <input {...input} type="file" onChange={this.handleFileInputChange} value={this.state.fileContent.name} accept='.jpg, .png, .jpeg' />
      } else if (label === "Post") {
        return <input {...input} type="file" onChange={this.handleFileInputChange} value={this.state.fileContent.name} accept='.md' />
      } else {
        return <input {...input} type="text" onChange={this.handleTextChange} value={this.state.text} />
      }
    
    }

    return (
      <div className="blog-inputs">
        <label>{label}</label>
        <div>
          {inputType()}
        </div>
        <div>
          {touched && error}
        </div>
      </div>
    )
  }
  
}

export default FileInput;