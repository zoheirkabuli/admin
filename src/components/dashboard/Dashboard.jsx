import React from "react";
import { Box } from "@mui/material";

// components
import DailyViewChart from "./DailyViewChart";

const Dashboard = () => {
  return (
    <Box
      component={"div"}
      sx={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <DailyViewChart />
    </Box>
  );
};

export default Dashboard;
