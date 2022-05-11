import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./style.css"
const HomePage = () => {

    const [inputval, setInputval] = useState([])

    useEffect(() => {
        getInputValues()
    }, [])

const getInputValues = async() => {
    let {data} = await axios.get(`http://localhost:5555/form`);
    console.log(data);
    setInputval(data)
}

const handleDelete = async(id) => {
    console.log(id)
    setInputval(inputval.filter((list) => list._id != id))
    await axios.delete(`http://localhost:5555/form/${id}`);
    
    alert("form deleted")
}

  return (
        <div className="top">
            {/* <h1>Home Page</h1> */}
            <div>
                <Link to='/form/create'>Create Form</Link>
            </div>

            <div>
                <h1>Forms Details</h1>
                <div>
                <table className='table'>
                    <tr>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    {inputval.map((e)=>
                        <tr key={e._id}>
                            <td>{e.title}</td>
                            <td><button>Edit</button></td>
                            <td><button> <NavLink to={`/form/${e._id}`}>View form Page</NavLink></button></td>
                            <td><button onClick={()=>handleDelete(e._id)}>delete</button></td>
                        </tr>
                    )} 
                </table>
                    {/* {inputval.map((e)=>
                    <div key={e._id} style={{display: 'flex', justifyContent: 'space-between', border: '1px solid yellow'}}>
                        <p>{e.email}</p>
                        <p>{e.text}</p>
                        <button>Edit</button>
                        <NavLink to={`/form/${e._id}`}>View Page</NavLink>
                        <button onClick={()=>handleDelete(e._id)}>delete</button>
                    </div>
                    )} */}
                </div>
            </div>
        </div>
  )
}

export default HomePage