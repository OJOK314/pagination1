import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCoinsData(response.data);
    };

    fetchData(); // ✅ FIXED
  }, []);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPost = coinsData.slice(firstPostsIndex, lastPostsIndex);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Hello Uganda 🇺🇬</h2>

      <div style={styles.postsContainer}>
        {currentPost.map(post => (
          <div key={post.id} style={styles.card}>
            <h4 style={styles.cardTitle}>{post.title}</h4>
            <p style={styles.cardBody}>{post.body}</p>
          </div>
        ))}
      </div>

      <Pagination 
        totalPosts={coinsData.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

// 🎨 Internal styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  postsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    marginBottom: '20px'
  },
  card: {
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  cardTitle: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#222'
  },
  cardBody: {
    fontSize: '14px',
    color: '#555'
  }
};

export default App;
