/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';

import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";
import { AddToList } from "./Components/AddToList";
import { RemoveFromList } from "./Components/RemoveFromList";
import React, { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState('')
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState()
  const [myAnimeList, setMyAnimeList] = useState([])

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id
    })
    if (index < 0) {
      const newArray = [...myAnimeList, anime]
      setMyAnimeList(newArray);
    }

  }
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])
  return (
    <>
      <div className="Header">
        <h1>
          <span className="anime"><i className="fas fa-compact-disc"></i> Anime</span>
        </h1>
        <div className="anime-search">
          <input type="text" placeholder="Search for an anime"
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="anime-list">
        <div className="AnimeInfo">
        {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">

          </h2>
          <div className="anime-col">
            <AnimeList animeList={animeData}
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <div className="My-list">
            <h2 className="text-heading">My List</h2>
            <AnimeList
             animelist={myAnimeList}
                setAnimeInfo={setAnimeInfo}
                animeComponent={RemoveFromList}
                handleList={(anime)=>removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
