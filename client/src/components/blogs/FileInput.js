import React from 'react';


const FileInput = ({ input, label, meta: { error, touched } }) => {

  function handleFileInputChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
  }

  const inputType = () => {
  
    return <input {...input} type="file" onChange={handleFileInputChange} />

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

export default FileInput;