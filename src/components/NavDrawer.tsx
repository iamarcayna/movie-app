import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import Button from "@mui/material/Button";

export const NavDrawer = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        padding: 3,
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "100%",
          paddingBottom: 2,
          borderBottom: "1px solid gold",
        }}
      >
        <Box
          sx={{
            padding: "0 0.4rem",
            borderRadius: 1,
            backgroundColor: "gold",
            color: "black",
          }}
        >
          <LiveTvIcon fontSize="large" />
        </Box>
        <Typography
          variant="h5"
          fontWeight="500"
          marginRight="2rem"
          marginLeft="0.4rem"
        >
          Gallery
        </Typography>
      </Box>
      <IconButton
        sx={{ position: "absolute", top: 25, right: 10 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <NavLink onClick={onClose} className="nav-link" to={"/"}>
        <Typography variant="h6">Movies</Typography>
      </NavLink>
      <NavLink onClick={onClose} className="nav-link" to={"watch"}>
        <Typography variant="h6">Watch</Typography>
      </NavLink>
      <Box
        sx={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            display: "block",
          }}
          variant="outlined"
        >
          Sign In
        </Button>
        <Button
          sx={{
            textTransform: "none",
            display: "block",
          }}
          variant="contained"
          color="secondary"
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};
