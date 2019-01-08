import React from 'react';

const BlogField = ({ input, label, meta: { error, touched } }) => {

  const inputType = () => {
    if(label === "Title" || label === "Image"){
      return <input {...input}  />
    } 

    return <textarea {...input} />
  }
  
  return (
    <div>
      <label>{label}</label>
      {inputType()}
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default BlogField;