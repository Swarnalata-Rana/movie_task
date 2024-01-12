import React from 'react';
const Counter = (props) => {
  return (
      <div>
            <img className='likebtn' src="./Like_icon.png" alt="Like" height="29px" width="26px" onClick={props.onClickLike} />
            <span className='count'>{props.vote}</span>
            <img src="./Diclike_icon.png" alt="Dislike" height="29px" width="26px" onClick={props.onClickDislike}/>
      </div>
  )
}
export default Counter;





