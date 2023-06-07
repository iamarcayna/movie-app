import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import Grid from "@mui/material/Grid";
import MoviesList from "../data/Movies.json";
import { MovieCard } from "../components/MovieCard";
import Skeleton from "@mui/material/Skeleton";

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
      const storedMovieList = localStorage.getItem("movieData");
      if (storedMovieList) {
        setMovieList(JSON.parse(storedMovieList));
      } else {
        setMovieList(MoviesList);
        localStorage.setItem("movieData", JSON.stringify(MoviesList));
      }
    }, 1000);
  }, []);

  return (
    <Grid
      component={"ul"}
      container
      marginY={{ xs: 1, sm: 2, md: 5 }}
      sx={{ listStyle: "none" }}
    >
      {movieList.length === 0
        ? Array.from({ length: 10 }).map((_, index) => (
            <Grid
              component={"li"}
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  margin: 1,
                  padding: 0,
                  height: { xs: 330, md: 280, lg: 305 },
                }}
              />
            </Grid>
          ))
        : movieList.map((movie, index) => (
            <Grid
              component={"li"}
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
    </Grid>
  );
};
