import React from 'react'

const Pagination = ({totalPosts,postsPerPage}) => {
let pages =[]

for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
  pages.push(index);
  
}
  return (
    <div>
      pagination
    </div>
  )
}

export default Pagination
