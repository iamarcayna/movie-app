// Interface
import { Movie } from "../models/Movie";
import MoviesList from "../data/Movies.json";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Grid from "@mui/material/Grid";
import { VideoPlayer } from "../components/VideoPlayer";
import { MovieCarousel } from "../components/MovieCarousel";
import { MovieDetails } from "../components/MovieDetails";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

export const SingleMoviePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState<Movie>();
  /*
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_URL}/api/v1/movies/watch/${params.id}`)
      .then((res) => res.json())
      .then((data: Movie) => setMovie(data))
      .catch((error) => console.error(error));
  }, [params.id]);*/

  useEffect(() => {
    // Simulate a delay in fetching data
    setTimeout(() => {
      let found = false;
      const storedMovieList = localStorage.getItem("movieData");
      const allMovies: Movie[] = storedMovieList
        ? JSON.parse(storedMovieList)
        : MoviesList;
      if (!storedMovieList) {
        localStorage.setItem("movieData", JSON.stringify(MoviesList));
      }
      allMovies.map((movie) => {
        if (movie.imdbId === params.id) {
          found = true;
          setMovie(movie);
        }
        return movie;
      });

      if (!found) {
        navigate("404");
      }
    }, 1000);
    return () => {
      setMovie(undefined);
    };
  }, [params.id, navigate]);

  const addComment = (comment: string) => {
    if (movie) {
      const updatedMovie = movie;
      updatedMovie.reviewIds.splice(0, 0, { review: comment });
      setMovie(updatedMovie);
      localStorage.setItem(
        "movieData",
        JSON.stringify([...MoviesList, updatedMovie])
      );
    }
  };

  return (
    <Grid container columns={16}>
      <Grid item xs={16} md={10} lg={11}>
        {movie ? (
          <VideoPlayer
            onCLick={() => navigate("/watch/")}
            trailerId={movie.trailerLink}
            playing={false}
          />
        ) : (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              marginTop: 2,
              backgroundColor: "transparent",
              height: {
                xs: 400,
                sm: 500,
                md: 450,
                lg: 600,
              },
              width: "100%",
            }}
          >
            <CircularProgress sx={{ color: "gold" }} />
          </Box>
        )}
      </Grid>
      <Grid item xs={16} md={6} lg={5}>
        {movie ? (
          <MovieDetails movie={movie} addComment={addComment} />
        ) : (
          <Box
            sx={{
              padding: { xs: 1, md: 2 },
              marginTop: { xs: 2, md: 8 },
              marginLeft: { xs: 0, md: 2 },
              height: {
                xs: 500,
                md: 370,
                lg: 520,
              },
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Skeleton variant="rounded" height={60} width={50} />
              <Box>
                <Skeleton
                  variant="rounded"
                  height={"1em"}
                  width="6em"
                  sx={{ marginLeft: 2, marginY: 1 }}
                />
                <Skeleton
                  variant="rounded"
                  height={"1em"}
                  width="3em"
                  sx={{ marginLeft: 2 }}
                />
              </Box>
            </Box>

            {Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton
                key={idx}
                variant="rounded"
                height={"0.8em"}
                width="100%"
                sx={{ marginY: 1.1 }}
              />
            ))}
            <Box marginTop={2}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="rounded"
                  height={"0.9em"}
                  width="10em"
                  sx={{ marginTop: 1 }}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                marginTop: 2,
                height: 200,
                width: "100%",
              }}
            >
              <CircularProgress sx={{ color: "gray" }} />
            </Box>
          </Box>
        )}
      </Grid>
      <Grid item xs={16} md={10} lg={11}>
        <MovieCarousel />
      </Grid>
    </Grid>
  );
};
