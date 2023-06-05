// Interface
import { SxProps, Theme } from "@mui/material/styles";

// Components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

interface PosterCardProps {
  title: string;
  poster: string;
  sx?: SxProps<Theme>;
}

export const PosterCard = ({ poster, title, sx }: PosterCardProps) => {
  return (
    <Card
      raised
      elevation={2}
      sx={{
        height: "250px",
        width: "150px",
        ...sx,
      }}
    >
      <CardMedia component="img" image={poster} alt={title} height="auto" />
    </Card>
  );
};
