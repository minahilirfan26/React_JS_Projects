import React, { useEffect, useState } from 'react'
import Add from './Add'
import Update from './Update'
import axios from 'axios'
import './style.css'

const View = () => {
    const [data,setData] = useState([])
    const [alert, setAlert] = useState('')
  const [myid, setMyid] = useState('')
  const [updatename, setUpdatename] = useState('')
  const [updateemail, setUpdateemail] = useState('')
  const [updatephone, setUpdatephone] = useState('')

    const getData = ()=>{
        axios.get('https://651f8d0b44a3a8aa4769c61f.mockapi.io/users')
        .then((res)=>{
         console.log(res.data)
         setData(res.data)
        })
    }
    
   const delHandler = (id)=>{
    axios.delete(`https://651f8d0b44a3a8aa4769c61f.mockapi.io/users/${id}`)
    .then(()=>{
        getData()
        setAlert("data Deleted")
    })
   }

   const updateHandler = (id)=>{
    axios.get(`https://651f8d0b44a3a8aa4769c61f.mockapi.io/users/${id}`)
    .then((res)=>{
console.log(res)
setMyid(id)
setUpdatename(res.data.name)
setUpdateemail(res.data.email)
setUpdatephone(res.data.phone)

    })
    document.querySelector('.update_form').classList.add("show")
   }

    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <div className='view_component'>
      <Add getData={getData}/>
      <h3>View Data <span className='alert'>{alert}</span></h3>

      <table className='view_table'>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>

        {data.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><button className='del_btn' onClick={()=> delHandler(item.id)}>Delete</button></td>
            <td><button className='up_btn' onClick={()=> updateHandler(item.id)}>Edit</button></td>
            </tr>
))}
      </table>
    </div>
    <Update 
    id={myid}
    updatename={updatename} 
    updateemail={updateemail} 
    updatephone={updatephone} 
    setUpdatename={setUpdatename}
    setUpdateemail={setUpdateemail}
    setUpdatephone={setUpdatephone}
    getData={getData}
    
    />
    </>
  )
}

export default View
