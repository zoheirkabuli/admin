import React, { useState, useRef } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import BundledEditor from "../../BundledEditor";
// query
import { GET_POST_BY_ID } from "../../services/api";

// image
import defFeaturedImage from "../../assets/img/featuredimage.jpg";

const AddEditPost = () => {
  const { postId } = useParams();

  const [post, setPost] = useState({
    title: "",
    slug: "",
    content: "",
    featuredImage: "",
  });
  // get post if exist id
  const { loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { id: postId },
    skip: !postId,
    onCompleted: (data) => {
      setPost(data.post);
    },
  });

  // editor ref
  const editorRef = useRef(null);

  if (error) {
    console.log(error);
    return <h1>خطا در بارگیری اطلاعات</h1>;
  }

  if (loading) {
    return (
      <Backdrop
        sx={{
          color: "#fff",
          position: "absolute",
          height: "100vh",
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      {console.log("hi")}
      <Box
        component={"div"}
        sx={{
          width: {
            mobile: "95%",
            tablet: "97%",
          },
          alignSelf: "center",
          display: "flex",
          flexDirection: {
            mobile: "column",
            tablet: "row",
          },
          gap: "2rem",
        }}
      >
        {/* right column */}

        <Box
          component={"div"}
          sx={{ width: { mobile: "100%", tablet: "75%" } }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1.5rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* title field */}
            <TextField
              id="title"
              label="عنوان"
              variant="outlined"
              fullWidth
              size="small"
              value={post.title}
              onChange={(e) => {
                setPost((prevPost) => ({ ...prevPost, title: e.target.value }));
              }}
            />
            {/* slug field */}
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: { mobile: "column", tablet: "row" },
                gap: "2rem",
              }}
            >
              <TextField
                id="slug"
                label="آدرس"
                variant="outlined"
                size="small"
                value={decodeURI(post.slug)}
                onChange={(e) => {
                  setPost((prevPost) => ({
                    ...prevPost,
                    url: e.target.value.replace(/\s+/g, "-").toLowerCase(),
                  }));
                }}
                sx={{
                  flexGrow: 1,
                }}
              />

              <Button
                variant="contained"
                onClick={() => {
                  setPost((prevPost) => ({
                    ...prevPost,
                    url: prevPost.title.replace(/\s+/g, "-").toLowerCase(),
                  }));
                }}
              >
                تولید آدرس
              </Button>
            </Box>

            <BundledEditor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={post.content.html}
              init={{
                height: "600",
                menubar: false,
                plugins: [
                  "advlist",
                  "anchor",
                  "autolink",
                  "help",
                  "image",
                  "link",
                  "lists",
                  "searchreplace",
                  "table",
                  "wordcount",
                  "directionality",
                ],
                toolbar:
                  "blocks | " +
                  "bold italic forecolor | rtl ltr | alignright aligncenter " +
                  "alignleft alignjustify | bullist numlist indent outdent | " +
                  "removeformat",
                content_style:
                  "body { font-family:iranyekan,Arial,sans-serif; font-size:14px }",
                language_url: "/langs/fa.js",
                language: "fa",
              }}
            />
          </Paper>
        </Box>

        {/* left column */}
        <Box
          component={"div"}
          sx={{
            width: { mobile: "100%", tablet: "25%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Button component="label" sx={{ padding: 0, overflow: "hidden" }}>
              <img
                src={post.featuredImage.url || defFeaturedImage}
                alt=""
                style={{
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button variant="contained">
              {postId ? "بروزرسانی" : "انتشار"}
            </Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default AddEditPost;
