import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";

export const WatchPage = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
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
            <Card
              elevation={0}
              sx={{
                height: "auto",
                margin: 1,
                cursor: "pointer",
              }}
            >
              <CardMedia
                image={movie.backdrops[0]}
                sx={{
                  height: { xs: 200, md: 150, lg: 175 },
                  transition: "transform 0.3s",
                  filter: "brightness(90%)",
                  "&:hover": {
                    transform: "scale(1.1) translate(0, -5%)",
                    filter: "brightness(100%)",
                  },
                }}
              />
              <CardContent
                sx={{ paddingX: 2, paddingTop: 2, paddingBottom: 0 }}
              >
                <Typography
                  height="auto"
                  color="lightgray"
                  textOverflow="ellipsis"
                  noWrap
                  sx={{ fontSize: { xs: "1.2em", sm: "1.1em" } }}
                >
                  {movie.title}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 2,
                  paddingY: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <IconButton sx={{ color: "lightgray" }}>
                    <AddIcon />
                  </IconButton>
                  <Button sx={{ color: "lightgray" }} color="inherit">
                    <PlayArrowIcon />
                    <Typography
                      fontSize="1.2em"
                      textTransform="none"
                      sx={{
                        color: "lightgray",
                      }}
                    >
                      Trailer
                    </Typography>
                  </Button>
                </Box>
                <IconButton sx={{ color: "lightgray" }}>
                  <InfoOutlinedIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};
