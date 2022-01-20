import { useState } from "react";
import { marked } from 'marked';

function App() {

  const [input, setInput] = useState('')
  return (
    <div>
      <textarea id="editor" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <div id="preview">
        {marked.parse(input)}  
      </div>      
    </div>
  );
}

export default App;
