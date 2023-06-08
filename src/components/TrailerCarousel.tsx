import MoviesList from "../data/Movies.json";

// Interface
import { Movie } from "../models/Movie";

// Hooks
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

// Components
import { PosterCard } from "./PosterCard";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { CarouselButton } from "./CarouselButton";

export const TrailerCarousel = ({
  onCLick,
}: {
  onCLick: (youtubeId: string, movieId: string, index: number) => void;
}) => {
  const muiTheme = useTheme();
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
    <>
      {movieList.length === 0 ? (
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
          <CircularProgress sx={{ color: muiTheme.palette.secondary.main }} />
        </Box>
      ) : (
        <Carousel
          fullHeightHover={false}
          animation="slide"
          indicators={false}
          duration={400}
          swipe={false}
          NavButton={({ onClick }) => {
            return (
              <>
                <CarouselButton onCLick={onClick} />
                <CarouselButton isBackButton onCLick={onClick} />
              </>
            );
          }}
          sx={{
            marginTop: 2,
            borderRadius: 2,
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
          {movieList?.map((movie, index) => (
            <Box
              onClick={() =>
                onCLick(movie.trailerLink.slice(-13), movie.imdbId, index)
              }
              key={movie.imdbId}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${
                  movie.backdrops[
                    Math.floor(Math.random() * movie.backdrops.length)
                  ]
                })`,
                position: "relative",
                height: {
                  xs: 350,
                  sm: 450,
                  md: 400,
                  lg: 550,
                },
                width: "100%",
                "&:hover": {
                  color: muiTheme.palette.secondary.main,
                },
                cursor: "pointer",
                zIndex: 1,
                "&:after": {
                  content: `" "`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: muiTheme.palette.background.default,
                  opacity: 0,
                  zIndex: -1,
                },
                "&:hover:after": {
                  opacity: 0.05,
                },
              }}
            >
              <PosterCard
                title={movie.title}
                poster={movie.poster}
                sx={{
                  position: "absolute",
                  bottom: "-50px",
                  left: { xs: "25px", md: "30px", lg: "50px" },
                  width: { xs: "100px", sm: "125px", md: "110px", lg: "150px" },
                  border: `2px solid ${muiTheme.palette.secondary.main}`,
                  height: "auto",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50px",
                  left: { xs: "125px", sm: "150px", md: "140px", lg: "200px" },
                  height: "auto",
                  margin: "0.5rem 1.5rem",
                  display: { xs: "block", md: "flex" },
                  alignItems: "center",
                }}
              >
                <Box
                  color="inherit"
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      sm: "4rem",
                      md: "3.5rem",
                      lg: "5rem",
                    },
                    marginRight: 2,
                  }}
                >
                  <PlayCircleOutlineIcon fontSize="inherit" />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    align="left"
                    color="white"
                    fontSize={{
                      xs: "1.4em",
                      sm: "1.6em",
                      md: "1.5em",
                      lg: "2.5em",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="left"
                    color="GrayText"
                    fontWeight="500"
                  >
                    Watch the Trailer
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      )}
    </>
  );
};
