import { Container } from "@mui/material";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
