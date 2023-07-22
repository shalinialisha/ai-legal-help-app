// App.js

import { useState } from 'react';
import TextForm from './components/TextForm';
import { generateText } from './components/api';


function App() {

  const [generated, setGenerated] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (text) => {
    setLoading(true);
    
    try {

      const data = await generateText(text); 
      setGenerated(data.generated);

    } catch (err) {
      console.error(err);

    }
    console.log('reached App.js handleSubmit'); // log message

    setLoading(false);
  }
 
  return (
    <>
      <TextForm onSubmit={handleSubmit} />

      {loading ? (
        <div>Loading...</div>  
      ) : (
        <div>{typeof generated === 'string' ? generated : generated ? generated.generated : ''}</div>
      )}
    </>
  );

}

export default App;
