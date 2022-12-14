import React from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

// icons
import AddIcon from "@mui/icons-material/Add";

// components
import PostsTable from "./PostsTable";

const PostsPage = () => {
  return (
    <>
      <PostsTable />
      <Fab
        component={Link}
        to={"/posts/add"}
        color="primary"
        aria-label="add"
        size="medium"
        sx={{
          position: "fixed",
          right: {
            mobile: "2rem",
            tablet: "4rem",
          },
          bottom: {
            mobile: "3rem",
            tablet: "4rem",
          },
        }}
        variant="extended"
      >
        <AddIcon sx={{ mr: 2 }} />
        پست جدید
      </Fab>
    </>
  );
};

export default PostsPage;
