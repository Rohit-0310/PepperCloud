import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "./style.css"

const array = [{id:0,value:"email",},{id:1,value:"text"},{id:2,value:"text"},{id:3,value:"Password"}]

const CreatePage = () => {

    const [inputval, setInputval] = useState([])
    const [ getInputdata, setGetInputdata] = useState({
        number:"",date:"",email:"",text:"",password:""
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
          <div style={{display:"flex", justifyContent: "space-between"}}>
              <div style={{border: '2px solid black', width: '450px', height: '200px'}}>
                      
                     <div>
                         <input onChange={(e)=>getInput(e)}    type="email" value={getInputdata.email} name="email" placeholder="Enter your Email"/>
                         <input onChange={(e)=>getInput(e)}    type="date" value={getInputdata.date} name="date" placeholder="Enter your date"/>
                         <input onChange={(e)=>getInput(e)}    type="number" value={getInputdata.number} name="number" placeholder="Enter your number"/>
                         <input onChange={(e)=>getInput(e)}    type="text" value={getInputdata.text} name="text" placeholder="Enter your text"/>
                         <input onChange={(e)=>getInput(e)}    type="password" value={getInputdata.password} name="password"placeholder="Enter your password"/>
                     </div>
                    
                 <button type="submit" onClick={()=>postData()}>Save Form</button>
              </div>



              <div>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > email </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > text </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > password </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > date </p>
                  <p onClick={(e)=>getvalue(e.target.innerText)} > number </p>
              </div>

          </div>
        </div>
    )
}

export default CreatePage