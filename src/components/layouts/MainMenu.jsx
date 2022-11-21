import React from "react";
import { List } from "@mui/material";
import MenuMenuItem from "./MenuMenuItem";

const MainMenu = () => {
  return (
    <List
      component={"nav"}
      sx={{ paddingBlock: "2rem", borderBottom: "1px solid #EBEFF2" }}
    >
      <MenuMenuItem title="داشبورد" iconName={"DashboardRounded"} path={"/"} />
      <MenuMenuItem
        title="نوشته ها"
        iconName={"BorderColorRounded"}
        path={"/posts"}
      />
    </List>
  );
};

export default MainMenu;
