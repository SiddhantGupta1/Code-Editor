import React,{useState, useEffect} from 'react';
import './App.css';
import Editor from './components/Editor';
import LocalStorage from './components/LocalStorage';

function App() {

  const [html, setHtml] = LocalStorage('html','')
  const [css, setCss] = LocalStorage('css','')
  const [js, setJs] = LocalStorage('js','')
  const [srcDoc, setSrcDoc] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
    setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
    `)
    }, 500)

    return () => clearTimeout(timeout)

  },[html,css,js])

  return (
    <>
    <div className="window top-window">
      <Editor editorTitle='HTML' language='xml' value={html} onChange={setHtml} />
      <Editor editorTitle='CSS' language='css' value={css} onChange={setCss} />
      <Editor editorTitle='JS' language='javascript' value={js} onChange={setJs} />
    </div>
    <div className="window">
      <iframe
        srcDoc = {srcDoc}
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