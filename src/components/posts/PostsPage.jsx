import React from "react";
import { Fab, Box } from "@mui/material";
import { Link } from "react-router-dom";

// icons
import AddIcon from "@mui/icons-material/Add";

// components
import PostsTable from "./PostsTable";

const PostsPage = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "95%",
        alignSelf: "center",
        position: "relative",
        flexGrow: 1,
      }}
    >
      <PostsTable />
      <Fab
        component={Link}
        to={"/posts/add"}
        color="primary"
        aria-label="add"
        size="medium"
        sx={{
          position: "fixed",
          right: "4rem",
          bottom: "4rem",
        }}
        variant="extended"
      >
        <AddIcon sx={{ mr: 2 }} />
        پست جدید
      </Fab>
    </Box>
  );
};

export default PostsPage;
