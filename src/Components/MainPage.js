import React, { useState,useEffect } from "react";
import Card from './card.js'


const Url = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';

const MainPage = ()=>{
const [post,setPosts] = useState([])
const getPost = async ()=>{
    const response = await fetch(Url);
    const data = await response.json();
    setPosts(data);
console.log(post)
    return data;

}
useEffect(()=>{
getPost()
},[])

return (
    <main>


    <div className="mainWidth">
        {post.map((p)=>{

    return (<div className='testingGrid'><Card key={p.id} {...p}/></div>)
  })}
    </div>

    </main>
)



}

export default MainPage;
