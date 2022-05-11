import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "./style.css"

// const array = [{id:0,value:"email",},{id:1,value:"text"},{id:2,value:"text"},{id:3,value:"Password"}]

const CreatePage = () => {

    const [inputval, setInputval] = useState([])
    const [ getInputdata, setGetInputdata] = useState({
        number:"",date:"",email:"",text:"",password:"",title:""
    })
    const [compval, setCompval] = useState("")

console.log("get",getInputdata)

    useEffect(() => {
        getInputValues()
    }, [])

const getInputValues = async() => {
    let {data} = await axios.get(`http://localhost:5555/form`);
    // console.log(data);
    setInputval(data)
}


const postData = async()=>{
    let {data} = await axios.post(`http://localhost:5555/form`,getInputdata);
}


const getvalue = (val) =>{
    setCompval(val)
    // let tempValue = inputval.filter((val)=>{
    //     // return val === val.
    // })
    // console.log(val);
}


const getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setGetInputdata({...getInputdata,[name]:value});
    
    
}

// console.log(compval)






    return (
        <div className="top">
          <div className="input_top">
              <div>
                        <input className="input_title" onChange={(e)=>getInput(e)}    type="String" value={getInputdata.title} name="title" placeholder="Title of the form"/><br/>
                     <div className="input_div">
                        <input onChange={(e)=>getInput(e)}    type="String" value={getInputdata.email} name="email" placeholder="Email"/>
                        <input onChange={(e)=>getInput(e)}    type="String" value={getInputdata.text} name="text" placeholder="Text"/>
                        <input onChange={(e)=>getInput(e)}    type="String" value={getInputdata.password} name="password"placeholder="Password"/>
                        <input onChange={(e)=>getInput(e)}    type="String" value={getInputdata.number} name="number" placeholder="Number"/>
                        <input onChange={(e)=>getInput(e)}    type="String" value={getInputdata.date} name="date" placeholder="Date"/>
                     </div>
                    
                 <button type="submit" onClick={()=>postData()}>Save Form</button>
              </div>



              <div className="form_drag">
                  
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Title </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Email </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Text </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Password </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Number </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > Date </p>
              </div>

          </div>
        </div>
    )
}

export default CreatePage