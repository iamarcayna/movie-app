import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { SearchPage } from "./pages/SearchPage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { MoviePage } from "./pages/MoviePage";
import { SingleMoviePage } from "./pages/SingleMoviePage";
import { WatchPage } from "./pages/WatchPage";
import { PageNotFound } from "./pages/PageNotFound";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e90ff",
    },
    secondary: {
      main: "#ffd700",
    },
    background: {
      default: "#000000",
    },
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MoviePage />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="watch/:id" element={<SingleMoviePage />} />
        <Route path="search/:title" element={<SearchPage />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
