// TextForm.js
import React, {useState} from 'react'

// TextForm.js

const TextForm = ({ onSubmit }) => {

    const [text, setText] = useState('');
    const handleFormSubmit = () => {
        onSubmit(text);
        setText('');
      }
      
    return (
      <form onSubmit={handleFormSubmit}>
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button> 
      </form>
    )
  
  }
  
  export default TextForm;