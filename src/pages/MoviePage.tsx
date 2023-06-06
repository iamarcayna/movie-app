// Hooks
import { useState } from "react";

// Components
import { MovieCarousel } from "../components/MovieCarousel";
import { UpNextList } from "../components/UpNextList";
import { TrailerCarousel } from "../components/TrailerCarousel";
import Grid from "@mui/material/Grid";
import { VideoPlayer } from "../components/VideoPlayer";

export const MoviePage = () => {
  const [playTrailer, setPlayTrailer] = useState<boolean>(false);
  const [trailerId, setTrailerId] = useState<string>("");
  const [activePlaying, setActivePlaying] = useState<string>("");

  const handleMovieClicked = (youtubeId: string, movieId: string): void => {
    if (activePlaying !== "") {
      document.getElementById(activePlaying)?.classList.remove("playing");
    }
    setActivePlaying(movieId);
    document.getElementById(movieId)?.classList.add("playing");
    setPlayTrailer(true);
    setTrailerId(youtubeId);
    window.scrollTo({ top: 0 });
  };

  const handleClose = (): void => {
    setPlayTrailer(false);
    setTrailerId("");
    document.getElementById(activePlaying)?.classList.remove("playing");
    setActivePlaying("");
  };

  return (
    <Grid container columns={16}>
      <Grid item xs={16} md={10} lg={11}>
        {trailerId !== "" && playTrailer ? (
          <VideoPlayer onCLick={handleClose} trailerId={trailerId} />
        ) : (
          <TrailerCarousel onCLick={handleMovieClicked} />
        )}
      </Grid>
      <Grid item xs={16} md={6} lg={5}>
        <UpNextList onCLick={handleMovieClicked} />
      </Grid>
      <Grid item xs={16} md={10} lg={11}>
        <MovieCarousel />
      </Grid>
    </Grid>
  );
};
