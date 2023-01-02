import React, { useState } from 'react';
import data from '../Mock-data/data.json' 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../PostView/app.css'

export default function Postview() {
  // console.log(data)
  const [like, setLike] = useState(`white`)
  const handleLike = () =>{
      setLike('red')
  }
  return (
      <>
        <div className='nav'>
          <span className='sp1'><InstagramIcon className='logo'/>
          <h1>Instaclone</h1></span>
          <CameraAltIcon/>
        </div>
        <hr/>
        <div className='main'>
          {data.user.map((data)=>{
            return (
              
              <>
              <section className='container'>
                <div className='min-nav'><h4>{data.name}</h4>
                  <MoreHorizIcon/>
                  </div>
                  <p>{data.location}</p>
                  <img className='img' src={data.PostImage} alt=""/>
                  <div className='sp2'><span><button style={{backgroundColor : like}} onDoubleClick={handleLike}><FavoriteBorderIcon/></button><SendIcon/></span> 
                  <p>{data.date}</p></div>
                  <p>{data.likes} Likes</p>
                  <h4>{data.description}</h4>
                  
                  </section>
              </>
            )
          })}
        </div>
     
      </>
      
  )
}






