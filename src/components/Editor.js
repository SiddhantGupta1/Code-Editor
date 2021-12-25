import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { MdOutlineOpenInFull, MdOutlineCloseFullscreen } from 'react-icons/md'

const Editor = (props) => {
    const{
        editorTitle,
        language,
        value,
        onChange,
    } = props;

    const [open, setOpen] = useState(true)

    const OpenInFull = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? '' : 'closed'}`}>
            <div className='editor-title'>
                {editorTitle}
                <button className='editor-btn' onClick={OpenInFull} >
                    {open ? <MdOutlineCloseFullscreen /> : <MdOutlineOpenInFull />}
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
