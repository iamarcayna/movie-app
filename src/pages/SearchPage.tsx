// Interface
import { Movie } from "../models/Movie";
import MoviesList from "../data/Movies.json";

// Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Grid from "@mui/material/Grid";
import { MovieCard } from "../components/MovieCard";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { WatchPage } from "./WatchPage";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SearchPage = () => {
  const searchParams = useParams();
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in fetching data
    setTimeout(() => {
      const storedMovieList = localStorage.getItem("movieData");
      const allMovies: Movie[] = storedMovieList
        ? JSON.parse(storedMovieList)
        : MoviesList;
      if (!storedMovieList) {
        localStorage.setItem("movieData", JSON.stringify(MoviesList));
      }
      const matchMovies = allMovies.filter(
        (movie) =>
          searchParams.title &&
          movie.title.toLowerCase().includes(searchParams.title.toLowerCase())
      );
      setSearchedMovies(matchMovies);
      setLoading(false);
    }, 1000);
    return setLoading(true);
  }, [searchParams.title]);

  return (
    <Box minHeight={"100vh"}>
      <Grid
        component={"ul"}
        container
        marginY={{ xs: 1, sm: 2, md: 5 }}
        sx={{ listStyle: "none" }}
        height={"auto"}
      >
        {loading ? (
          <Box
            sx={{
              display: "grid",
              placeItems: "start center",
              width: "100%",
            }}
          >
            <CircularProgress sx={{ color: "gold" }} />
          </Box>
        ) : (
          searchedMovies.map((movie, idx) => (
            <Grid component={"li"} key={idx} item xs={12} sm={6} md={4} lg={3}>
              <MovieCard key={idx} movie={movie} />
            </Grid>
          ))
        )}
        {searchedMovies.length === 0 && !loading && (
          <>
            <Typography
              variant="h6"
              color={"lightgray"}
              textAlign={"center"}
              width={"100%"}
              marginY={2}
            >
              Sorry, We can't find any results.
            </Typography>
            <Typography
              variant="subtitle2"
              color={"gray"}
              textAlign={"center"}
              width={"100%"}
            >
              Try searching for another movie.
            </Typography>
            <Typography
              variant="subtitle2"
              color={"secondary"}
              textAlign={"center"}
              width={"100%"}
            >
              or
            </Typography>
            <Typography
              variant="subtitle2"
              color={"gray"}
              textAlign={"center"}
              width={"100%"}
            >
              Here are movies you might want to watch.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "3rem",
                borderLeft: `5px solid gold`,
                paddingLeft: 1,
              }}
            >
              <Typography variant="h6">Suggested Movies</Typography>
              <ArrowForwardIosIcon />
            </Box>
            <WatchPage />
          </>
        )}
      </Grid>
    </Box>
  );
};
