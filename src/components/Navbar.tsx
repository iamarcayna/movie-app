import { SearchBar } from "./SearchBar";

// Functions
import styled from "@emotion/styled";

// Hooks
import { useNavigate } from "react-router-dom";

// Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

// Icons
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LiveTvIcon from "@mui/icons-material/LiveTv";

// Custom styled components
const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const Navbar = () => {
  const navigate = useNavigate();

  const searchMovie = (movie: string): void => {
    navigate(`search/${movie}`);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      enableColorOnDark
      sx={{ background: "rgba(30,30,30,0.5)" }}
    >
      <Container maxWidth="xl">
        <FlexBox sx={{ paddingY: 1.5 }}>
          <FlexBox>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: { md: "none" },
                marginRight: { xs: 0, sm: 2 },
              }}
            >
              <MenuIcon />
            </IconButton>
            <FlexBox
              sx={{
                marginRight: 2,
                cursor: "pointer",
                display: { xs: "none", sm: "flex" },
              }}
              onClick={() => navigate("/")}
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
            </FlexBox>
            <FlexBox sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <NavLink className="nav-link" to={"/"}>
                Movies
              </NavLink>
              <NavLink className="nav-link" to={"watch"}>
                Watch
              </NavLink>
            </FlexBox>
          </FlexBox>

          <SearchBar
            placeHolder="Search for movies..."
            onSearch={searchMovie}
            sx={{
              width: { xs: "100%", sm: "auto" },
              marginLeft: { xs: 1, sm: "auto" },
            }}
          />
          <Button
            sx={{
              textTransform: "none",
              marginLeft: 2,
              display: { xs: "none", md: "block" },
            }}
            variant="outlined"
          >
            Sign In
          </Button>
          <Button
            sx={{
              textTransform: "none",
              marginLeft: 2,
              display: { xs: "none", md: "block" },
            }}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </FlexBox>
      </Container>
    </AppBar>
  );
};
