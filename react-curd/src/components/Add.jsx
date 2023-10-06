import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
const Add = ({getData}) => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [alert, setAlert] = useState('')

    const onHandleSubmit = ()=>{
        axios.post('https://651f8d0b44a3a8aa4769c61f.mockapi.io/users', {
            name: name,
            email: email,
            phone: phone
        }).then(()=>{
            setAlert("Data Added")
            setName('');
            setEmail('');
            setPhone('');
            getData()
        })
    }

  return (
    <div className='add_form'>
    <h1>Add Data <span>{alert}</span></h1>
    <input type="text" placeholder='name'  value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" placeholder='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="number" placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>

    <button onClick={onHandleSubmit}>Add Item</button>
    </div>
  )
}

export default Add
