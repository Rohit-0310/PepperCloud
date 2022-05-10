import React from 'react'

import "./style.css"

const CreatePage = () => {




    return (
        <div className="top">
          <div style={{display:"flex", justifyContent: "space-between"}}>
              <div>
                  <p>Name</p>
                  <p>Text</p>
                  <p>Password</p>
                  <p>Mobile Number</p>
                  <p>Email</p>
              </div>

              <div style={{border: '2px solid black', width: '450px', height: '200px'}}></div>
          </div>
        </div>
    )
}

export default CreatePage