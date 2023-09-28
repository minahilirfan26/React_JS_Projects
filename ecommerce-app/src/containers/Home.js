import DrawerAppBar from "../components/AppBar"
import MediaCard from "../components/ProductCard"
import axios from "axios"
import React, {useEffect, useState} from "react"

 function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios("https://fakestoreapi.com/products")
            .then((res)=> setProducts(res.data))
            .catch((err)=>console.log("errr===========>>>>>>",err))
    },[]);
    console.log("products", products)
  return (
    <div style={{padding: 20}}>
        <DrawerAppBar/>
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
        }}
        >
          {products.map((v,i)=>{
            return <MediaCard product={v} key={i}/>;
          })}
        </div>
    </div>
  )
}

export default Home;