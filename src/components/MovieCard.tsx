import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Movie } from "../models/Movie";
import Box from "@mui/material/Box";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const [collapsedInfo, setCollapsedInfo] = useState(false);

  return (
    <Card
      color="inherit"
      elevation={0}
      sx={{
        height: "auto",
        margin: 1,
        position: "relative",
        "&:after": {
          content: `""`,
          backgroundImage: `url(${movie.backdrops[6]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: 200, md: 150, lg: 175 },
          width: "100%",
          filter: "blur(5px)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        },
      }}
    >
      <SnackbarProvider />
      <CardMedia
        image={movie.backdrops[6]}
        sx={{
          marginBottom: 1,
          height: { xs: 180, md: 130, lg: 155 },
          transition: "transform 0.3s",
          filter: "brightness(90%)",
          position: "relative",
          width: "90%",
          transform: "translate(5%,5%)",
          zIndex: 10,
          "&:hover": {
            filter: "brightness(100%)",
            transform: "scale(1.1) translate(5%,5%)",
          },
        }}
      />
      <CardContent
        sx={{
          paddingX: 2,
          paddingTop: 2,
          paddingBottom: 0,
        }}
      >
        <Typography
          height="auto"
          color="lightgray"
          textOverflow="ellipsis"
          noWrap
          sx={{ fontSize: { xs: "1.3em", sm: "1.2em" } }}
        >
          {movie.title}
        </Typography>
        <Rating name="read-only" value={2} readOnly sx={{ marginY: 1 }} />
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
          <IconButton
            color="primary"
            onClick={() => enqueueSnackbar("Added to Watchlist")}
          >
            <AddIcon />
          </IconButton>
          <Button
            sx={{ color: "lightgray" }}
            color="inherit"
            onClick={() => navigate(`${movie.imdbId}`)}
          >
            <PlayArrowIcon />
            <Typography
              fontSize="1.1em"
              textTransform="none"
              sx={{
                color: "lightgray",
              }}
            >
              Watch
            </Typography>
          </Button>
        </Box>
        <IconButton
          sx={{ color: "lightgray" }}
          onClick={() => setCollapsedInfo(!collapsedInfo)}
        >
          <InfoOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
