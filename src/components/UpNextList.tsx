// Components
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Movie } from "../models/Movie";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import MoviesList from "../data/Movies.json";
import moment from "moment";

export const UpNextList = ({
  onCLick,
}: {
  onCLick: (youtubeId: string, movieId: string, index: number) => void;
}) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  /*
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_URL}/api/v1/movies/trailers`)
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
    <Box
      sx={{
        boxShadow: "0 0 1px gray",
        borderRadius: "0.5rem",
        marginTop: { xs: 4, sm: 2 },
        marginLeft: { xs: 0, md: 2 },
        paddingBottom: 2,
      }}
    >
      <Typography color="secondary" variant="h6" padding="0.5rem 1rem">
        Playlist
      </Typography>
      <Box
        component={"ul"}
        sx={{
          height: {
            xs: 450,
            md: 370,
            lg: 520,
          },
          overflowY: "scroll",
          overflowX: "hidden",
          paddingX: { xs: 0.5, sm: 2 },
          paddingY: "0.5rem",
          marginRight: 1,
          scrollBehavior: "smooth",
          listStyle: "none",
        }}
      >
        {movieList.length === 0
          ? Array.from({ length: 7 }).map((_, idx) => (
              <Box
                component={"li"}
                key={idx}
                sx={{
                  borderRadius: "0.5rem",
                  transition: "background 150ms ease",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: 2,
                  height: 130,
                  padding: 1,
                  "&:hover": {
                    backgroundColor: "rgba(35,35,35,0.5)",
                  },
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{
                    height: "100%",
                    borderRadius: "0.3rem",
                    flex: {
                      xs: "0 0 100px",
                      sm: "0 0 150px",
                      md: "0 0 100px",
                      xl: "0 0 150px",
                    },
                  }}
                />
                <Box
                  sx={{
                    flex: "1 1 100%",
                    height: "100%",
                    width: {
                      xs: "calc(100% - 100px)",
                      sm: "calc(100% - 150px)",
                      md: "calc(100% - 100px)",
                      xl: "calc(100% - 150px)",
                    },
                    paddingLeft: 1.5,
                    paddingBottom: 1,
                  }}
                >
                  <Skeleton
                    variant="rounded"
                    sx={{
                      height: "1.1em",
                      width: { xs: "90%", sm: "50%", md: "100%" },
                      borderRadius: "1.1em",
                      marginBottom: 1,
                    }}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{
                      height: "1.1em",
                      width: { xs: "80%", sm: "40%", md: "100%" },
                      borderRadius: "1.1em",
                      marginBottom: 1,
                    }}
                  />
                  <Box
                    sx={{
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      height: "auto",
                      width: "100%",
                      gap: 1,
                      marginTop: 0.5,
                    }}
                  >
                    <Skeleton
                      variant="rounded"
                      sx={{
                        height: "1em",
                        width: "90px",
                        borderRadius: "1em",
                      }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{
                        height: "1em",
                        width: "70px",
                        borderRadius: "1em",
                      }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{
                        height: "1em",
                        width: "100px",
                        borderRadius: "1em",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))
          : movieList.map((movie, index) => (
              <Box
                onClick={() =>
                  onCLick(movie.trailerLink.slice(-13), movie.imdbId, index)
                }
                component={"li"}
                id={movie.imdbId}
                key={index}
                sx={{
                  borderRadius: "0.5rem",
                  transition: "background 150ms ease",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: 2,
                  height: 130,
                  padding: 1,
                  overflowY: "hidden",
                  "&:hover": {
                    backgroundColor: "rgba(35,35,35,0.5)",
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${movie.backdrops[5]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    borderRadius: "0.3rem",
                    flex: {
                      xs: "0 0 100px",
                      sm: "0 0 150px",
                      md: "0 0 100px",
                      xl: "0 0 150px",
                    },
                  }}
                />
                <Box
                  sx={{
                    flex: "1 1 100%",
                    height: "100%",
                    width: {
                      xs: "calc(100% - 100px)",
                      sm: "calc(100% - 150px)",
                      md: "calc(100% - 100px)",
                      xl: "calc(100% - 150px)",
                    },
                    paddingLeft: 1.5,
                    paddingBottom: 1,
                  }}
                >
                  <Typography noWrap variant="body1">
                    {movie.title}
                  </Typography>
                  <Typography noWrap variant="subtitle2" color={"gray"}>
                    Release Date •{" "}
                    {moment(movie.releaseDate).format("MM/DD/YYYY")}
                  </Typography>
                  <Box
                    sx={{
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      height: 60,
                      width: "100%",
                      gap: 1,
                      marginTop: 0.5,
                    }}
                  >
                    {movie.genres.map((genre, idx) => (
                      <Chip
                        clickable={false}
                        key={idx}
                        label={genre}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "gray",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
};
