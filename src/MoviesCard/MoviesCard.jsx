import React from "react";
import styles from "../MoviesCard/MoviesCard.module.css";

const imagePrefixURl = "http://image.tmdb.org/t/p/w500";
const MoviesCard = (props) => {
    const movie = props?.movie;
    return (
        <div className={styles.container} title={movie?.title}>
            <img src={`${imagePrefixURl}${movie?.poster_path}`} alt="Error" />
            <p>{movie?.title}</p>
        </div>
    );
};

export default MoviesCard;
