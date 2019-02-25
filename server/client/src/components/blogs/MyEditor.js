import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class MyEditor extends Component {
  constructor(props){
    super(props);

    this.state = { editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render(){
    return (
      <Editor 
        editorState={this.state.editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="editor-content"
        onEditorStateChange={this.onChange.bind(this)}
      />
    );
  }
}


export default MyEditor