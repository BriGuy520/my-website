import React, { Component } from 'react';


class FileInput extends Component {

  constructor(props){
    super(props);

    this.state = {fileName: ''}

    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  
  handleFileInputChange(event){
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file.name);
  }
  
  
  render(){
    console.log(this.state);

    const { input, label, meta: {error, touched} } = this.props;

    const inputType = () => {
    
      return <input {...input} type="file" onChange={this.handleFileInputChange} value={this.state.fileName} />
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