import React from 'react';


const BlogField = ({ input, label, meta: { error, touched } }) => {

  const inputType = () => {
    if(label === "Title" || label === "Image" || label === "Description"){
      return <input {...input}  />
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