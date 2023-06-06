import { Movie } from "../models/Movie";
import MoviesList from "../data/Movies.json";

// Hooks
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// Components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { MovieThumbNail } from "./MovieThumbNail";
import { CarouselButton } from "./CarouselButton";

// Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const MovieCarousel = () => {
  const muiTheme = useTheme();
  const xsScreen = useMediaQuery(muiTheme.breakpoints.only("xs"));
  const containerRef = useRef<HTMLDivElement>(null);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [visibleItemCount, setVisibleItemCount] = useState(0);
  const [backButtonVisible, setBackButtonVisible] = useState(false);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [prevScrollWidth, setPrevScrollWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let containerSize = containerRef.current?.clientWidth;
      if (containerSize !== undefined) {
        setVisibleItemCount(
          xsScreen
            ? Math.round(containerSize / 125)
            : Math.round(containerSize / 150)
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleItemCount, xsScreen]);
  /*
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT_URL}/api/v1/movies`)
      .then((res) => res.json())
      .then((data: any[]) => {
        const mappedMovies: Movie[] = data.map((movie) => ({
          imdbId: movie.imdbId,
          title: movie.title,
          releaseDate: movie.releaseDate,
          trailerLink: movie.trailerLink,
          genres: movie.genres,
          poster: movie.poster,
          backdrops: movie.backdrops,
          reviewIds: movie.reviewIds,
        }));
        setMovieList(mappedMovies);
      })
      .catch((error) => console.error(error));
  }, []);*/

  useEffect(() => {
    // Simulate a delay in fetching data
    setTimeout(() => {
      const mappedMovies: Movie[] = MoviesList.map((movie) => ({
        imdbId: movie.imdbId,
        title: movie.title,
        releaseDate: movie.releaseDate,
        trailerLink: movie.trailerLink,
        genres: movie.genres,
        poster: movie.poster,
        backdrops: movie.backdrops,
        reviewIds: movie.reviewIds,
      }));
      setMovieList(mappedMovies);
    }, 1000);
  }, []);

  const handleNext = (next: boolean) => {
    if (containerRef.current) {
      let offsetSize = xsScreen
        ? 125 * visibleItemCount
        : 150 * visibleItemCount;
      let curScrollWidth = next
        ? prevScrollWidth + offsetSize
        : prevScrollWidth - offsetSize;
      let maxScrollWidth =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;

      if (curScrollWidth >= maxScrollWidth) {
        curScrollWidth = maxScrollWidth;
        setBackButtonVisible(true);
        setNextButtonVisible(false);
      } else if (curScrollWidth < 0) {
        curScrollWidth = 0;
        setNextButtonVisible(true);
        setBackButtonVisible(false);
      } else {
        setNextButtonVisible(true);
        setBackButtonVisible(true);
      }
      containerRef.current.scrollLeft = curScrollWidth;
      setPrevScrollWidth(curScrollWidth);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "3rem",
          borderLeft: `5px solid ${muiTheme.palette.secondary.main}`,
          paddingLeft: 1,
        }}
      >
        <Typography variant="h6">Trending Now</Typography>
        <ArrowForwardIosIcon />
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "auto",
        }}
      >
        <Box
          component={"ul"}
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: { xs: "scroll", sm: "hidden" },
            scrollBehavior: "smooth",
            gap: 2,
            height: "auto",
            paddingY: 2,
            listStyle: "none",
          }}
          ref={containerRef}
        >
          {movieList.length === 0
            ? Array.from({ length: 7 }).map((_, idx) => (
                <Skeleton
                  component={"li"}
                  key={idx}
                  variant="rounded"
                  sx={{
                    width: { xs: "125px", md: "150px" },
                    height: { xs: "187.5px", md: "225px" },
                    flexShrink: 0,
                  }}
                />
              ))
            : movieList.map((movie: Movie) => (
                <MovieThumbNail key={movie.imdbId} movie={movie} />
              ))}
        </Box>
        <CarouselButton
          isVisible={backButtonVisible}
          isBackButton
          onCLick={() => handleNext(false)}
        />
        <CarouselButton
          isVisible={nextButtonVisible}
          onCLick={() => handleNext(true)}
        />
      </Box>
    </>
  );
};
