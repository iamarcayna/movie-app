// Hooks
import { useTheme } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

// Components
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Icons
import CloseIcon from "@mui/icons-material/Close";

export const VideoPlayer = ({
  onCLick,
  trailerId,
  sx,
  playing = true,
}: {
  onCLick: () => void;
  trailerId: string;
  sx?: SxProps<Theme>;
  playing?: boolean;
}) => {
  const muiTheme = useTheme();

  return (
    <Box
      sx={{
        marginTop: 2,
        width: "100%",
        position: "relative",
        height: { xs: 400, sm: 500, md: 450, lg: 600 },
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "60px",
          top: 0,
          left: 0,
          backgroundColor: muiTheme.palette.background.default,
        }}
      >
        <Button
          color="inherit"
          onClick={() => onCLick()}
          sx={{
            marginTop: { xs: 0, md: 2 },
            marginLeft: { xs: 0, md: 2 },
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <CloseIcon fontSize="small" />
          <Typography variant="subtitle2">Close</Typography>
        </Button>
      </Box>
      <ReactPlayer
        id="video-player"
        url={`https://www.youtube.com/watch?${trailerId}`}
        controls={true}
        width="100%"
        height="100%"
        light={false}
        playing={playing}
      />
    </Box>
  );
};
