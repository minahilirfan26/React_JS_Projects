import React, {useState, useEffect} from 'react'


const Color = () => {
    const [color, setColor] = useState('');

    useEffect(()=>{
        const val = 'e' +
        Math.floor(
            Math.random()*(256*256*256)
        ).toString(16)
        setColor(val)
    },[])
  return (
    <div>
      <div
      style={{background: `${color}`, 
             height: "80px",
              width: "100px",
              margin: "50px"}}
      ><h1>{color}</h1></div>
      
    </div>
  )
}

export default Color
