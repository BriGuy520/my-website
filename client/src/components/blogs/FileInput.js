import React, { Component } from 'react';

class FileInput extends Component {

  constructor(props){
    super(props);

    this.state = {fileContent: '', text: ''}

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  
  handleFileInputChange(event){
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

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