// api.js

export async function generateText(text) {

    console.log('Making API call to /generate'); // log message

    const response = await fetch('/generate', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text}) 
    });

    console.log(response); // log full response object
  
    const data = await response.json();
  
    if (!response.ok) {
        const error = new Error(data.message || 'API error');
        error.status = response.status;
        throw error;
      }

    console.log('Response data:', data); // log parsed JSON

    return data;
  
  }