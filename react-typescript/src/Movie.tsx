import React, { useEffect, useState } from 'react';

interface IMovie {
    title: string;
    description: string;
}

type MovieProps = {
    ratings: number;
};

export const Movie = (props: MovieProps) => {
    /**
     *  This means movie can be either IMovie or null.
     */
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        const newMovie = {
            title: 'Marvel',
            description: 'The Best Movie',
        };
        setMovie(newMovie);
    }, []);

    return (
        <div>
            <h1>Title: {movie?.title}</h1>
            <p>Description: {movie?.description}</p>
            <p>Ratings: {props.ratings} </p>
        </div>
    );
};
