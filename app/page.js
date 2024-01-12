"use client"
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from 'react';
import {movie_datas} from "./data.js";
import Movie_row from "./Movie_row";

const Page = () => {
  const [movies, setMovies] = useState(movie_datas)
  const [count, setCount] = useState({});
  const handleDeleteBtn = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
  };
  function likeBtn(id){
  const updatevote={...count}
    if (updatevote[id]== undefined){
      updatevote[id]=1
    }
    else{
      updatevote[id]+=1
    }
    setCount(updatevote)
  }

  function diclikeBtn(id){
  const updatevote={...count}
    if (updatevote[id]== undefined){
      updatevote[id]=-1
    }
    else{
      updatevote[id]-=1
    }
    setCount(updatevote)
  }
  const shortItem=movies.sort((a,b)=>{
    const voteA=count[a.id] || 0;
    const voteB=count[b.id] || 0;
    return voteB-voteA;
  })

  return (
    <div>
        <Header/>
            {movies.map(movie => (
                <Movie_row
                    title={movie.title}
                    desc={movie.desc}
                    image={movie.img}
                    year={movie.year}
                    vote={count[movie.id]}
                    onClickLike={()=>likeBtn(movie.id)}
                    onClickDislike={()=>diclikeBtn(movie.id)}
                    onDelete={() => handleDeleteBtn(movie.id)}
                />               
            ))}    
        <Footer/>
    </div>  
  );
};
export default Page;

 
