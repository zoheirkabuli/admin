import React, { useState, useEffect } from "react";
import { Drawer, Box, IconButton, SvgIcon } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import MainMenu from "./MainMenu";

// icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MainHeader from "./MainHeader";

const ToggleIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1152_1323)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1152_1323">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const [openPC, setOpenPC] = useState(true);
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <Box
      component={"div"}
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Drawer
        sx={{
          width: {
            mobile: "auto",
            tablet: openPC ? "25.6rem" : "6.8rem",
          },
          flexShrink: 0,
          transition: "width 0.25s",
          "& .MuiDrawer-paper": {
            width: {
              mobile: "75%",
              tablet: openPC ? "25.6rem" : "6.8rem",
            },
            boxSizing: "border-box",
            transition: "width 0.25s",
            boxShadow: "0px 0px 18px 0px #0000000F",
            border: 0,
            overflowX: "hidden",
            ...(!isMobile &&
              !openPC && {
                "& .MuiListItemText-primary": { opacity: 0 },
                "& 	.MuiListItemButton-root .MuiSvgIcon-root": {
                  marginInline: "0.8rem",
                },
                "&:hover": {
                  width: "25.6rem",
                  "& .toggle-btn": {
                    marginInlineEnd: 0,
                  },
                  "& 	.MuiListItemButton-root .MuiSvgIcon-root": {
                    marginInline: 0,
                  },
                  "& .MuiListItemText-primary": { opacity: 1 },
                },
              }),
          },
        }}
        variant={isMobile ? "" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => {
          if (isMobile) {
            setOpen(false);
          }
        }}
      >
        <Box
          component={"div"}
          sx={{
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #EBEFF2",
            justifyContent: "flex-end",
          }}
        >
          {isMobile ? (
            <IconButton
              color="primary"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          ) : (
            <IconButton
              className="toggle-btn"
              color={openPC ? "primary" : "secondaryGray"}
              onClick={() => {
                setOpenPC((prevOpenPC) => !prevOpenPC);
              }}
              sx={{
                marginInlineStart: "auto",
                transition: "margin 0.25s",
                ...(!openPC && {
                  marginInlineEnd: "0.4rem",
                }),
              }}
            >
              <ToggleIcon sx={{ width: "1.4rem", height: "1.4rem" }} />
            </IconButton>
          )}
        </Box>
        <MainMenu />
      </Drawer>
      <Box
        component={"div"}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.25s",
          paddingBottom: "2rem",
          width: {
            mobile: "100%",
            tablet: `calc(100% - ${openPC ? "25.6rem" : "6.8rem"})`,
          },
          gap: "2rem",
        }}
      >
        <MainHeader setOpen={setOpen} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
