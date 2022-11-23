import React, { useEffect, useState } from "react";
import { IconButton, Avatar, AppBar, Toolbar } from "@mui/material";

// icons
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// images
import avatar from "../../assets/img/avatar.jpg";

const MainHeader = ({ setOpen }) => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };
  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="sticky"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          transition:
            "padding 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s, backdrop-filter 0.25s ease-in-out 0s",
          width: "95%",
          padding: scrollTop > 0 ? "1rem 1.5rem" : "1rem 0",
          borderRadius: "0 0 0.5rem 0.5rem",
          ...(scrollTop > 0 && {
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "rgb(19 17 32 / 42%) 0px 4px 8px -4px",
            backdropFilter: "blur(2px)",
          }),
        }}
      >
        {console.log(scrollTop)}

        <IconButton
          sx={{
            display: {
              mobile: "flex",
              tablet: "none",
            },
          }}
          color="primary"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <MenuRoundedIcon />
        </IconButton>

        <Avatar src={avatar} sx={{ marginInlineStart: "auto" }} />
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
