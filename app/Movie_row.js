import React from 'react'
import Counter from './Counter';
import  DeleteComponent from './DeleteComponent.js';
const Movie_row = (props) => {
  return (
    <>  
        <div className='bgcolor'>
            <div className='row8'>
                <div className='clo6'>
                    <img src={props.image}/>
                </div>
                <div className='col7'>
                    <h1>{props.title}</h1>
                    <p className='year'>{props.year}</p>
                    <h3 className='desr1'>Description</h3>
                    <p className='desr2'>{props.desc}</p>
                    <div className='delete_like_dislike_row'>
                        <div className='like_diclike_row'>
                            <Counter 
                                onClickLike={props.onClickLike}
                                onClickDislike={props.onClickDislike}
                                vote={props.vote}
                            />
                        </div>
                        <div className='delete'>
                            <DeleteComponent
                                onclick={props.onDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Movie_row;
