import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewForm = () => {

    const [showForm, setShowForm] = useState([]);
    const form = useParams()

    useEffect(()=> {
        const getform = async () => {
            let result = await fetch(`http://localhost:5555/form/${form.id}`);
            let res = await result.json();
            setShowForm(res)
        };
        getform();
    },[])
    console.log(showForm)


  return (
    <div className="top">
        <h1>{showForm.title}</h1>
        <div className="view_Div">{showForm.email} <input type={showForm.email} placeholder={ "Enter Your " + showForm.email} /></div>
        <div className="view_Div">{showForm.text} <input type={showForm.text} placeholder={ "Enter  your " + showForm.text} /></div>
        <div className="view_Div">{showForm.number} <input type={showForm.number} placeholder={ "Enter your " + showForm.number}/></div>
        <div className="view_Div">{showForm.password} <input type={showForm.password} placeholder={ "Enter your " + showForm.password}/></div>
        <div className="view_Div">{showForm.date} <input type={showForm.date} placeholder={ "Enter your " + showForm.date}/></div>
        <button>Submit Form</button>
    </div>
  )
}

export default ViewForm