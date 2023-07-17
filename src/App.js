// App.js
import React, {useState} from 'react'
import TextForm from './components/TextForm';

function App() {
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = async (text) => {
    console.log('Handle submit called');

    await fetch("/generate", {
      method: "POST",
      body: JSON.stringify({text}) 
    });
  
    const response = await fetch("/generate");
    const data = await response.json();
  
    setGeneratedText(data.generated);
  }

  return (
    <div><TextForm onSubmit={handleSubmit} /></div>
  );

}

export default App;