import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';


export default function MediaCard({product}) {
    console.log(product);
  return (
    <Card sx={{ width: 250, marginTop: 4 }}>
      <div>
        <img style={{width: "100%", height: 240, objectFit: "contain"}} 
        src={product.image} alt=""/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Rs {product.price}
        </Typography>
        <Typography variant="span" color="div">
        {product.title.slice(0,28)}...
        </Typography>
      </CardContent>
      <ReactStars
       edit={false} 
       value={product.rating.rate}
       count={5}
       size={18}
       color2={"#ffd700"}/>
       
       <CardActions>
        <Button style={{backgroundColor: "#8bc34a", color: "#fff"}} size="small">ADD TO CART</Button>
        
      </CardActions>
    </Card>
  );
}
