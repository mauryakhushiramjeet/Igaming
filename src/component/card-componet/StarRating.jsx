import React, {useState} from 'react'
import {Rating} from "react-simple-star-rating";

const StarRating = ({rating,index}) => {
    return (
        <Rating readonly={true} iconsCount={rating}  size={window.innerWidth < 768 ? 25 : 37}  initialValue={rating}
                fillColor={index === 1 ? "#FFAA06" : "#FFAA06"}  emptyColor={index === 1 ? "#FFFFFF" : "gray"}  fillStyle={{display:"flex"}} emptyStyle={{display:"flex"}}
                className={`star-rating ${index === 1 ? "custom-white-star" : ""}`}/>
    )
}
export default StarRating;

