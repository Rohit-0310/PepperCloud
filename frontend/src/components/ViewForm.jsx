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
    <div>
        <h1>View Form</h1>
        <div>{showForm.email} <input /></div>
        <div>{showForm.text} <input /></div>
        <div>{showForm.number} <input /></div>
        <div>{showForm.password} <input /></div>
        <div>{showForm.date} <input /></div>
        <button>Submit Form</button>
    </div>
  )
}

export default ViewForm