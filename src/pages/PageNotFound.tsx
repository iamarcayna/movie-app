import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import NotFound from "../assets/Notfound.png";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

export const PageNotFound = () => {
  const muiTheme = useTheme();
  return (
    <Box textAlign="center" padding={2}>
      <Typography variant="h1" sx={{ color: muiTheme.palette.secondary.main }}>
        <SentimentVeryDissatisfiedIcon fontSize="inherit" />
      </Typography>
      <Typography variant="body1" sx={{ color: muiTheme.palette.primary.main }}>
        The page you are looking may have been moved, deleted, or possibly never
        existed.
      </Typography>
      <Box
        component={"img"}
        src={NotFound}
        sx={{
          height: { xs: "100%", sm: 600 },
          width: { xs: "100%", sm: 600 },
        }}
      />
      <Link
        display={"block"}
        sx={{ color: "lightgray", textDecoration: "none" }}
        fontSize="0.5rem"
        href="https://lovepik.com/images/png-error-404.html"
      >
        Error 404 Png vectors by Lovepik.com
      </Link>
    </Box>
  );
};
