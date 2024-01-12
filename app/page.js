"use client"
import React, { useState } from 'react';
import { movie_datas } from './data.js';  
import Header from './Header';
import Footer from './Footer';
import MovieRow from './Movie_row';

const Page = () => {
  const [movies, setMovies] = useState(movie_datas);
  const [count, setCount] = useState({});

  const handleDeleteBtn = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
  };

  const likeBtn = (id) => {
    const updatevote = { ...count };
    updatevote[id] = (updatevote[id] || 0) + 1;
    setCount(updatevote);
  };

  const dislikeBtn = (id) => {
    const updatevote = { ...count };
    updatevote[id] = (updatevote[id] || 0) - 1;
    setCount(updatevote);
  };

  const sortedMovies = movies.sort((a, b) => {
    const voteA = count[a.id] || 0;
    const voteB = count[b.id] || 0;
    return voteB - voteA;
  });

  return (
    <div>
      <Header />
      {sortedMovies.map((movie) => (
        <MovieRow
          key={movie.id}  // Add a unique key prop
          title={movie.title}
          desc={movie.desc}
          image={movie.img}
          year={movie.year}
          vote={count[movie.id] || 0}
          onClickLike={() => likeBtn(movie.id)}
          onClickDislike={() => dislikeBtn(movie.id)}
          onDelete={() => handleDeleteBtn(movie.id)}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Page;

 
