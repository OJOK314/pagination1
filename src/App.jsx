import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import Table from './components/Table';
import './App.css';
// import TypesExample from './components/Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // slightly more for large screens
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCoinsData(response.data);
      setLoading(false)
    };
    fetchData();
  }, []);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPost = coinsData.slice(firstPostsIndex, lastPostsIndex);

  return (
    <div className="container">

      <ColorSchemesExample />

      <h2 className="text-center my-4">Hello Uganda 🇺🇬</h2>

      {/* Responsive Grid */}
      <div className="row g-3">
        {currentPost.map(post => (
          <div key={post.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination 
          totalPosts={coinsData.length} 
          postsPerPage={postsPerPage} 
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Table & Other Components */}
      <div className="mt-5">
        <Table />
      </div>

      <div className="mt-4">
        {/* <TypesExample /> */}
      </div>

<Searchbar/>
    </div>

  );
}


export default App;