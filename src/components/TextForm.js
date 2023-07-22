// TextForm.js
import React, {useState} from 'react'

// TextForm.js

const TextForm = ({ onSubmit }) => {

    const [text, setText] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        onSubmit(text);
        console.log('Making API call to /handle'); // log message

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