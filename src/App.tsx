import React from "react";
import { useEffect, useState } from "react"
import { homeLoad } from "./scripts/homeLoad"
import { GetHomeList } from "./types/TMDBTypes";

export default function App() {
  const [homeFilms, setHomeFilms] = useState([{
    englishName: "PP",
    brazilianName:"",
    items: []
  }]);
  

  useEffect(()=>{
    const loadHomeList = async () => {
      const getData = await homeLoad.getHomeList();
      setHomeFilms(getData);
    }
    loadHomeList();
  },[]);
  
  return (
      <div className="App">
        {homeFilms.map((item, index) => {
          return (<div key={index}>
            {item.brazilianName}
          </div>)
        }) }
      </div>
  )
}