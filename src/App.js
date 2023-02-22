
import './App.css';
import React, { useEffect ,useState} from 'react';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const getDate = async () => {
    const response = await fetch('https://api.jikan.moe/v4/anime?q=Dragon ball&sfw');
    const data = await response.json();
    setAnimeData(data);
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
