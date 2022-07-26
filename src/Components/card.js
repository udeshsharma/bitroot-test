import React from 'react';


const Card = ({author,title,content,thumbnail})=>{
    return(
        <div className='cardWidth'>
     <article >
     <div className='imgEditing'>
   <img src={thumbnail.small}  alt={title} className='img'/>
   <div className='textOnHover'>
<p className='text'><a href="#">Learn More</a></p>
   </div>
     </div>
   <h3>{title}</h3>
   <p>{content}</p>
   <div className='footer'>
   <p>{author.name}</p>
   <p>"Nov 25,2020"</p>
   </div>
   <p>{author.role}</p>
    </article>
        </div>
   

    )
}

export default Card;