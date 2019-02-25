import React from 'react';
import ReactQuill from 'react-quill';

const MyEditor = ({ input }) => {

  return (
    <ReactQuill 
      {...input}
      onChange={(newValue, delta, source) => {
        if(source === 'user'){
          input.onChange(newValue);
        }
      }}

      onBlur={(range, source, quill) => {
        input.onBlur(quill.getHTML());
      }}
    />
  )
}

export default MyEditor;