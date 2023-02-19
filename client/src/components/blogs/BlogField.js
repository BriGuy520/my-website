import React from 'react';


const BlogField = ({ input, label, meta: { error, touched } }) => {

  function handleFileInputChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    console.log(file);
  }

  const inputType = () => {
    if(label === "Title" || label === "Description"){
      return <input {...input} type="text" />
    } else if(label === "Image"){
      return <input {...input} type="file" onChange={handleFileInputChange} />
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

export default BlogField;