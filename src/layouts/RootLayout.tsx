import { Container } from "@mui/material";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container
        component={"main"}
        maxWidth="xl"
        sx={{ padding: { xs: 1, sm: 2 } }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
