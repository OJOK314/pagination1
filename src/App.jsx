import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [coinsData,setCoinsData] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPer] = useState(8)
  
useEffect( async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  setCoinsData(response,data)
})

 

  return (
    <>
      <h2>Hello Uganad</h2>

    <cryToList coinsData={coinsData}/>
    </>
  );
}

export default App;
