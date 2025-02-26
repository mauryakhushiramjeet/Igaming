import React, {useState} from 'react'
import {Rating} from "react-simple-star-rating";

const StarRating = (props) => {
    return (
        <Rating readonly={true}  size={window.innerWidth < 768 ? 25 : 37}  initialValue={props.rating} fillStyle={{display:"flex"}} emptyStyle={{display:"flex"}}/>
    )
}
export default StarRating;