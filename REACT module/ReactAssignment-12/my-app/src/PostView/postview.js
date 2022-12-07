import React from 'react';
import data from '../Mock-data/data.json' 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Postview() {
  console.log(data)
  return (
      <>
      <h1></h1>
      
      {data.user.map((data)=>{
            return (
              <>
                  <h3>{data.name}</h3>
                  <p>{data.location}</p>
                  <img src={data.PostImage} alt=""/>
                  <FavoriteBorderIcon/>
                  <p>{data.likes}</p>
                  <p>{data.description}</p>
                  <p>{data.date}</p>
              </>
            )
      })}
      </>
      
  )
}






