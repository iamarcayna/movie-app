import Box from "@mui/material/Box";
import { Movie } from "../models/Movie";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Rating from "@mui/material/Rating";
import { AccountCircle } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { KeyboardEvent, useState } from "react";

export const MovieDetails = ({
  movie,
  addComment,
}: {
  movie: Movie;
  addComment: (comment: string) => void;
}) => {
  const [comment, setComment] = useState("");

  const handleAddComment = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setComment("");
    }
    if (e.key === "Enter") {
      if (comment.trim() !== "") {
        addComment(comment);
        setComment("");
      }
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: 1, md: 2 },
        marginTop: { xs: 2, md: 8 },
        marginLeft: { xs: 0, md: 2 },
        height: {
          xs: "auto",
          md: 370,
          lg: 520,
        },
        color: "#b9b9b9",
      }}
    >
      <Box sx={{ display: "flex", color: "lightgray" }}>
        <Box
          component={"img"}
          src={movie.backdrops[9]}
          sx={{
            height: 60,
            width: 50,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
        <Box>
          <Typography marginLeft={2} variant="h6" noWrap>
            {movie.title}
          </Typography>
          <Typography marginLeft={2} variant="subtitle2">
            {moment(movie.releaseDate).format("YYYY")}
          </Typography>
        </Box>
      </Box>
      <Typography marginY={1.5} variant="body2">
        {movie.summary}
      </Typography>
      <Typography variant="subtitle2">
        Release Date: {moment(movie.releaseDate).format("Do MMMM YYYY")}
      </Typography>
      <Box display={"flex"} gap={1}>
        <Typography variant="subtitle2">Genres:</Typography>
        {movie.genres.map((genre, idx) => (
          <Typography variant="subtitle2" key={idx}>
            {genre}
          </Typography>
        ))}
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="subtitle2">Rating:</Typography>
        <Rating
          size="small"
          name="read-only"
          value={movie.rating}
          precision={0.5}
          readOnly
          sx={{ color: "gold", marginLeft: 1 }}
        />
      </Box>
      <Box>
        <Typography
          marginTop={2}
          variant="subtitle1"
        >{`${movie.reviewIds.length} Comments`}</Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", marginBottom: 2 }}>
          <AccountCircle fontSize="large" sx={{ marginRight: 1 }} />
          <TextField
            id="input-comment"
            label="Add a comment..."
            variant="standard"
            fullWidth
            value={comment}
            margin="dense"
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => handleAddComment(e)}
          />
        </Box>
        <List
          sx={{
            width: "100%",
            maxHeight: 200,
            overflowY: "scroll",
          }}
          aria-label="comments"
        >
          {movie.reviewIds.map((review, idx) => (
            <ListItem dense key={idx} alignItems="flex-start">
              <AccountCircle fontSize="large" sx={{ marginRight: 1 }} />
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  Unkown User
                </Typography>
                <Typography variant="subtitle2">{review.review}</Typography>
                <IconButton sx={{ color: "gray" }}>
                  <ThumbUpIcon fontSize="small" />
                </IconButton>
                <IconButton sx={{ color: "gray" }}>
                  <ThumbDownIcon fontSize="small" />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
