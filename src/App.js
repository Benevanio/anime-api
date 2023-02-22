
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [data, setData] = React.useState(null);
  const getDate = async () => {
    const response = await fetch('https://api.jikan.moe/v4/anime?q=Dragon ball&sfw');
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    getDate();
  }, []);
  return (
    <div className="App">


    </div>
  );
}

export default App;
