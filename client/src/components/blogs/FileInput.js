import React, { Component } from 'react';


class FileInput extends Component {

  constructor(props){
    super(props);

    this.state = {fileContent: ''}

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
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
  
  
  render(){

    const { input, label, meta: {error, touched} } = this.props;
    
    const inputType = () => {

      if(label === "Image"){
        return <input {...input} type="file" onChange={this.handleFileInputChange} value={this.state.fileContent.name} accept='.jpg, .png, .jpeg' />
      } else {
        return <input {...input} type="file" onChange={this.handleFileInputChange} value={this.state.fileContent.name} accept='.docx, .md, .pdf' />
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