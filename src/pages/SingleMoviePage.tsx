// Interface
import { Movie } from "../models/Movie";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Grid from "@mui/material/Grid";
import { VideoPlayer } from "../components/VideoPlayer";

export const SingleMoviePage = () => {
  const navigate = useNavigate();
  const movieId = useParams();
  const [movie, setMovie] = useState<any>({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_URL}/api/v1/movies/watch/${movieId.id}`)
      .then((res) => res.json())
      .then((data: Movie) => setMovie(data))
      .catch((error) => console.error(error));
  }, [movieId.id]);

  return (
    <Grid container columns={16}>
      <Grid item xs={16} md={10} lg={11}>
        <VideoPlayer
          onCLick={() => navigate("/")}
          trailerId={movie?.trailerLink}
          playing={false}
        />
      </Grid>
      <Grid item xs={16} md={6} lg={5}></Grid>
      <Grid item xs={16} md={10} lg={11}></Grid>
    </Grid>
  );
};
