// Interface
import { Movie } from "../models/Movie";

// Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export const SearchPage = () => {
  const search = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_ROOT_URL}/api/v1/movies/search/${search.title}`
    )
      .then((res) => res.json())
      .then((data: Movie) => setMovie(data))
      .catch((error) => console.error(error));
  }, [search.title]);

  return (
    <Grid container columns={16}>
      <Grid item xs={16} md={10} lg={11}>
        <Button>Search page</Button>
      </Grid>
      <Grid item xs={16} md={6} lg={5}></Grid>
      <Grid item xs={16} md={10} lg={11}></Grid>
    </Grid>
  );
};
