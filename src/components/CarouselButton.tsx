import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

export const CarouselButton = ({
  isBackButton = false,
  isVisible = true,
  onCLick,
}: {
  isBackButton?: boolean;
  isVisible?: boolean;
  onCLick: any;
}) => {
  return (
    <Button
      onClick={onCLick}
      color="inherit"
      variant="outlined"
      sx={{
        backgroundColor: "rgba(35,35,35,0.4)",
        position: "absolute",
        top: "50%",
        right: !isBackButton ? "0" : "",
        left: isBackButton ? "0" : "",
        transform: "translateY(-50%)",
        height: 80,
        transition: "background 200ms ease",
        fontSize: "2em",
        display: { xs: "none", sm: isVisible ? "grid" : "none" },
        "&:hover": {
          backgroundColor: "rgba(35,35,35,0.8) !important",
          color: "gold",
          opacity: "1 !important",
          filter: "unset !important",
        },
      }}
    >
      {isBackButton ? (
        <ArrowForwardIosIcon
          sx={{
            transform: "rotate(180deg)",
          }}
          fontSize="inherit"
        />
      ) : (
        <ArrowForwardIosIcon fontSize="inherit" />
      )}
    </Button>
  );
};
