import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import { Box } from "@mui/system";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box component={"div"} sx={{ display: "flex", width: "100%" }}>
      <Drawer
        sx={{
          width: "240px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "240px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        open
      >
        <h1>سلام خوبی؟</h1>
      </Drawer>

      <div>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          سلام
        </Button>
      </div>
    </Box>
  );
};

export default MainLayout;
