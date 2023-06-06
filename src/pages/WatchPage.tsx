import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MoviesList from "../data/Movies.json";
import { MovieCard } from "../components/MovieCard";

export const WatchPage = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  /*
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_URL}/api/v1/movies`)
      .then((res) => res.json())
      .then((data: any[]) => {
        const mappedMovies: Movie[] = data.map((movie) => ({
          imdbId: movie.imdbId,
          title: movie.title,
          releaseDate: movie.releaseDate,
          trailerLink: movie.trailerLink,
          genres: movie.genres,
          poster: movie.poster,
          backdrops: movie.backdrops,
          reviewIds: movie.reviewIds,
        }));
        setMovieList(mappedMovies);
      })
      .catch((error) => console.error(error));
  }, []);*/

  useEffect(() => {
    // Simulate a delay in fetching data
    setTimeout(() => {
      const mappedMovies: Movie[] = MoviesList.map((movie) => ({
        imdbId: movie.imdbId,
        title: movie.title,
        releaseDate: movie.releaseDate,
        trailerLink: movie.trailerLink,
        genres: movie.genres,
        poster: movie.poster,
        backdrops: movie.backdrops,
        reviewIds: movie.reviewIds,
      }));
      setMovieList(mappedMovies);
    }, 1000);
  }, []);

  const MoreInfo = () => {
    return <Box>Info</Box>;
  };

  return (
    <Grid container marginY={{ xs: 2, md: 5 }}>
      {movieList.length === 0 ? (
        <Button>Empty</Button>
      ) : (
        movieList.map((movie, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
