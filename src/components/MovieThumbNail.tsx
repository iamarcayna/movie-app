import Box from "@mui/material/Box";
import { Movie } from "../models/Movie";
import { PosterCard } from "./PosterCard";
import { useTheme } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";

export const MovieThumbNail = ({ movie }: { movie: Movie }) => {
  const muiTheme = useTheme();
  const navigate = useNavigate();
  return (
    <Box component={"li"} sx={{ position: "relative" }}>
      <PosterCard
        title={movie.title}
        poster={movie.poster}
        sx={{
          width: { xs: "125px", md: "150px" },
          height: "100%",
          flexShrink: 0,
          cursor: "pointer",
          position: "relative",
        }}
      />
      <Box
        onClick={() => navigate(`watch/${movie.imdbId}`)}
        sx={{
          display: "grid",
          placeItems: "center",
          fontSize: "4em",
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: muiTheme.palette.background.default,
          transition: "opacity 200ms ease",
          opacity: "0",
          color: muiTheme.palette.secondary.main,
          cursor: "pointer",
          "&:hover": {
            opacity: "0.3",
          },
        }}
      >
        <PlayCircleOutlineIcon fontSize="inherit" />
      </Box>
    </Box>
  );
};
