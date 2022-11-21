import React from "react";
import { ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// icons
import * as MuIcons from "@mui/icons-material";

const MenuMenuItem = ({ iconName, title, path }) => {
  const { pathname } = useLocation();
  const ItemIcon = MuIcons[iconName];
  console.log(pathname);
  return (
    <ListItemButton
      selected={pathname === path}
      component={Link}
      to={path}
      sx={{
        gap: "1.5rem",
        "&.Mui-selected": {
          "& *": {
            color: "primary.main",
          },
        },
        "&:hover": {
          "& *": {
            color: "primary.main",
          },
        },
      }}
    >
      <ItemIcon
        sx={{
          fontSize: {
            mobile: 30,
            tablet: 20,
          },
          transition: "color 0.2s linear,margin 0.25s",
        }}
        color="iconGray"
      />
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          fontSize: {
            mobile: "1.6rem",
            tablet: "1.3rem",
          },
          fontWeight: "500",
          color: "darkBlueText.main",
          whiteSpace: "nowrap",
        }}
        sx={{
          "& .MuiListItemText-primary": {
            transition: "color 0.2s linear,opacity 0.25s",
          },
        }}
      />
    </ListItemButton>
  );
};

export default MenuMenuItem;
