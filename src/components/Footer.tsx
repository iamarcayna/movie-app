// Functions
import styled from "@emotion/styled";

// Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

// Custom styled components
const StyleButton = styled(Button)(() => ({
  fontWeight: "700",
  paddingX: 4,
  textTransform: "none",
}));

export const Footer = () => {
  const socialMediaIcons = [
    <InstagramIcon />,
    <TwitterIcon />,
    <YouTubeIcon />,
    <FacebookIcon />,
  ];

  return (
    <Container component={"footer"} maxWidth="xl" sx={{ marginTop: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: 2,
          paddingY: 3,
        }}
      >
        <StyleButton color="secondary" variant="contained">
          Get the App
        </StyleButton>
        <StyleButton variant="outlined">Sign in for more access</StyleButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 2, sm: 4 },
          }}
        >
          {socialMediaIcons.map((icon, index) => (
            <IconButton key={index} size="large">
              {icon}
            </IconButton>
          ))}
        </Box>
        <Typography color="GrayText" fontSize="0.9em" textAlign="center">
          &copy; 2023 by Reymond N. Arcayna
        </Typography>
      </Box>
    </Container>
  );
};
