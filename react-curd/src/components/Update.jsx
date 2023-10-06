import axios from 'axios'
import React from 'react'

const Update = ({id,updatename,updateemail,updatephone,setUpdatename,setUpdateemail,setUpdatephone,getData}) => {
    const updateHandel = (id)=>{
axios.put(`https://651f8d0b44a3a8aa4769c61f.mockapi.io/users/${id}`,{
    name: updatename,
    email: updateemail,
    phone: updatephone,
})
.then((res)=>{
   getData() 
})
document.querySelector('.update_form').classList.remove("show")
    }
  return (
    <div className='update_form'>
        <h1>Updata Data</h1>

      <div className='form_div'>
        <input type="text" value={updatename} onChange={(e)=>setUpdatename(e.target.value)}/>
        <input type="text" value={updateemail} onChange={(e)=>setUpdateemail(e.target.value)}/>
        <input type="text" value={updatephone} onChange={(e)=>setUpdatephone(e.target.value)}/>
        <button onClick={()=>updateHandel(id)}>Update</button>
      </div>
    </div>
  )
}

export default Update
