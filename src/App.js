import React,{useState} from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <>
    <div className="window top-window">
      <Editor editorTitle='HTML' language='xml' value={html} onChange={setHtml} />
      <Editor editorTitle='CSS' language='css' value={css} onChange={setCss} />
      <Editor editorTitle='JS' language='javascript' value={js} onChange={setJs} />
    </div>
    <div className="window">
      <iframe 
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
    </>
  );
}

export default App;