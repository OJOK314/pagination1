import React, { useState, useEffect } from 'react'
import axios from "axios"

const Searchbar = () => {

  const [data, setData] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setData(res.data)
        setRecords(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const filter = (e) => {
    setRecords(
      data.filter(f =>
        f.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <div className='p-4 bg-blue'>
      <div className='bg-red border shadow'></div>

      <input type='text' placeholder='Search name...' onChange={filter} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
          </tr>
        </thead>

        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.address.city}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Searchbar
