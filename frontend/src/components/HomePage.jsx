import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const HomePage = () => {
  return (
        <div className="top">
            <h1>Home Page</h1>
            <div>
                <Link to='/form/create'>Create Page</Link>
            </div>

            <div>
            
            </div>
        </div>
  )
}

export default HomePage