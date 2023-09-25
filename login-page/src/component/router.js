import React,{useState, useEffect} from "react"
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Login from "./Login"
import Welcome from "./Welcome"
import UserNotFound from './UserNotFound'
function AppRouter() {
    const [user, setUser] = useState(false);
    useEffect(()=>{
        const isUser = localStorage.getItem("user");
        if (isUser) {
            setUser(true)
        }
    },[])
  return (
<BrowserRouter>
<Routes>
<Route path="/login" element={user ? <Navigate to={'/welcome'}/> : <Login/>} />
<Route path="/welcome" element={user ? <Welcome/> : <Navigate to={'/login'}/>}/>
<Route path="*" element={<UserNotFound/>}/>
</Routes>
</BrowserRouter>
  )
}

export default AppRouter
