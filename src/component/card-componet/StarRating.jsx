import React, { useState, useEffect } from 'react';
import { Rating } from "react-simple-star-rating";

const StarRating = ({ rating, index }) => {
    const [starSize, setStarSize] = useState(37);

    const updateSize = () => {
        if (window.innerWidth <= 768) {
            setStarSize(25);
        } else if (window.innerWidth <= 991) {
            setStarSize(35);
        } else {
            setStarSize(37);
        }
    };

    useEffect(() => {
        updateSize(); // Set initial size
        window.addEventListener("resize", updateSize); // Update on resize
        return () => window.removeEventListener("resize", updateSize); // Cleanup
    }, []);

    return (
        <Rating
            readonly={true}
            iconsCount={rating}
            size={starSize}
            initialValue={rating}
            fillColor={index === 1 ? "#FFAA06" : "#FFAA06"}
            emptyColor={index === 1 ? "#FFFFFF" : "gray"}
            fillStyle={{ display: "flex" }}
            emptyStyle={{ display: "flex" }}
            className={`star-rating ${index === 1 ? "custom-white-star" : ""} `}
        />
    );
};

export default StarRating;
