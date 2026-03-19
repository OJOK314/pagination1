import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import './App.css';


function App() {
  const [coinsData,setCoinsData] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPer] = useState(8)
  
useEffect( async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  setCoinsData(response,data)
}, [])

 const lastPostsIndex = currentPage*postsPerPage
 const firstpostsIndex = lastPostsIndex-postsPerPage
 const currentPosts = coinsData.slice(lastPostsIndex,firstpostsIndex)

  return (
    <>
      <h2>Hello Uganad</h2>

    <cryToList coinsData={currentPosts}/>
    </>
  );
}

export default App;
