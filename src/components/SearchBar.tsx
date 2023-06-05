// Functions & Interface
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";

// Components
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// Icons
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  placeHolder: string;
  onSearch: (movie: string) => void;
  sx?: SxProps<Theme>;
}

export const SearchBar = ({
  placeHolder,
  onSearch: searchMovie,
  sx,
}: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Escape") {
      setSearchValue("");
      e.currentTarget.blur();
    }

    if (e.key === "Enter") {
      setSearchValue("");
      e.currentTarget.blur();
      searchMovie(searchValue);
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
        padding: 0.5,
        backgroundColor: "rgba(100,100,100,0.15)",
        "&:hover": { backgroundColor: "rgba(100,100,100,0.25)" },
        ...sx,
      }}
    >
      <Box
        sx={{
          paddingLeft: { xs: 1, sm: 2 },
          paddingRight: 1,
          display: "grid",
          placeItems: "center",
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        autoComplete="off"
        id="search"
        fullWidth={true}
        placeholder={placeHolder}
        value={searchValue}
        inputProps={{ "aria-label": "search" }}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        sx={{
          fontSize: "1em",
          flexGrow: "1",
          color: "whitesmoke",
          paddingRight: 2,
          width: { xs: "6rem", sm: "15rem" },
          transitionProperty: "width",
          transitionDuration: "200ms",
          transitionTimingFunction: "ease-in-out",
          "&.Mui-focused": {
            width: { lg: "22rem" },
          },
        }}
      />
    </Paper>
  );
};
