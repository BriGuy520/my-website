import React from 'react';
import ReactQuill from 'react-quill';

const MyEditor = ({ input }) => {


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{'color': [] }, { 'background': [] }],
      [{'font': [] }],
      [{'align': [] }],
      ['clean']
    ],
  },

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <ReactQuill 
      modules={modules}
      formats={formats}
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