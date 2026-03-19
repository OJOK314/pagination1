import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div style={styles.container}>
      {pages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={styles.button}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

// 🔹 Internal styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
    flexWrap: 'wrap'
  },
  button: {
    padding: '8px 14px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#39f10a',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s'
  }
};

export default Pagination;
