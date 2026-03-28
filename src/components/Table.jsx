import React, { useState } from "react";

const Table = () => {
  // Sample data (you can replace with API data)
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", age:"20"},
    { id: 2, name: "Jane Smith", email: "jane@example.com", age:"20" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", age:"20" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", age:"20" },
    { id: 5, name: "Daniel Wilson", email: "daniel@example.com" , age:"20"},
    { id: 6, name: "Olivia Taylor", email: "olivia@example.com" , age:"20"},
    { id: 7, name: "James Anderson", email: "james@example.com" , age:"20"},
    { id: 8, name: "Sophia Thomas", email: "sophia@example.com" , age:"20"},
    { id: 9, name: "William Jackson", email: "william@example.com" , age:"20"},
    { id: 10, name: "Ava White", email: "ava@example.com", age:"20" , age:"20"},
    { id: 11, name: "Benjamin Harris", email: "benjamin@example.com", age:"25" },
    { id: 12, name: "Isabella Martin", email: "isabella@example.com", age:"24" },
    { id: 13, name: "Lucas Thompson", email: "lucas@example.com", age:"23" },
    { id: 14, name: "Mia Garcia", email: "mia@example.com", age:"22" },
    { id: 15, name: "Henry Martinez", email: "henry@example.com", age:"21" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h2>User Table with Pagination</h2>

      {/* Table */}
      <table border={"10"} cellPadding={"20"} style={{ backgroundColor:"red"}}>
        <thead>
          <tr  style={{ backgroundColor: "blueviolet" }}>
            
            <th style={{color:"white", cursor:"pointer", fontSize:"20px", fontFamily:"sans-serif"}}>ID</th>
            <th style={{color:"white", cursor:"pointer" , fontSize:"20px", fontFamily:"sans-serif"}}>NAME</th>
            <th style={{color:"white", cursor:"pointer" , fontSize:"20px", fontFamily:"sans-serif"}}>EMAIL</th>
             <th style={{color:"white", cursor:"pointer" , fontSize:"20px", fontFamily:"sans-serif"}}>AGE</th>
           
          </tr>
        </thead>

      
        <tbody>
          {/* {currentItems.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))} */}

        {

          currentItems.map((user)=>(
            <tr style={{color:"white"}}>
            
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))
        }

         
        </tbody>
      </table>

      {/* Pagination Controls */}
{/*       
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
      <div style={{margin:"10px"}}>
        <button onClick={()=>setCurrentPage(currentPage -1)} disabled={currentPage === 1}>Prev</button>

        <p>page {currentPage} of {totalPages}</p>

        <button onClick={()=> setCurrentPage(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
      </div>




      {/* Page Numbers */}
      <div style={{ marginTop: "10px" }}>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              backgroundColor: currentPage === i + 1 ? "#007bff" : "#ddd",
              color: currentPage === i + 1 ? "#f5ebeb" : "#000"
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;