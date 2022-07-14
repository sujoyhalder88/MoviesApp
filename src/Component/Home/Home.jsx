import React, { useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import { getPopulerMovies } from "../../ApiKey/MoviesApi";
import styles from "../Home/Home.module.css";
import MoviesCard from "../../MoviesCard/MoviesCard";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
    const [isNearEnd, setIsNearEnd] = useState(false);

    const fetchPopularMovies = (page) => {
        getPopulerMovies(page).then((res) => {
            setIsDataLoading(true);
            if (!res) return;
            if (page === 1) {
                setTotalPages(res.total_pages);
                setPopularMovies(res.results);
            } else {
                setPopularMovies((prev) => [...prev, ...res?.results]);
            }
            setCurrentPage(res?.page);
        });
    };

    const handlePaginate = () => {
        if (isMoreMoviesLoading || currentPage >= totalPages) return;
        fetchPopularMovies(currentPage + 1);
    };

    useEffect(() => {
        if (isNearEnd) handlePaginate();
    }, [isNearEnd]);

    useEffect(() => {
        fetchPopularMovies(1);
    }, []);
    return (
        <div className={styles.container}>
            {!isDataLoading ? (
                "Loading..."
            ) : (
                <Paginate onIntersection={(isOnEnd) => setIsNearEnd(isOnEnd)}>
                    <div className={styles.innerContainer}>
                        {popularMovies.map((item, index) => (
                            <MoviesCard
                                movie={item}
                                key={item.id + index + ""}
                            />
                        ))}
                    </div>
                </Paginate>
            )}
        </div>
    );
};

export default Home;
