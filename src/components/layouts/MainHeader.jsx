import React from "react";
import { IconButton, Box } from "@mui/material";
import { isMobile } from "react-device-detect";

// icons
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const MainHeader = ({ setOpen }) => {
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "1.5rem",
        borderBottom: "1px solid #EBEFF2",
      }}
    >
      {isMobile && (
        <IconButton
          color="primary"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <MenuRoundedIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default MainHeader;
