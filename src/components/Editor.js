import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { MdOutlineOpenInFull } from 'react-icons/md'

const Editor = (props) => {
    const{
        editorTitle,
        language,
        value,
        onChange,
    } = props;
    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {editorTitle}
                <button className='editor-btn'>
                    <MdOutlineOpenInFull color='white' />
                </button>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-editor'
                options ={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    )
}

export default Editor;
