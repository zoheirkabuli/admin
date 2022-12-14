import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Backdrop,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

// query
import { GET_ALL_POSTS } from "../../services/api";

// icons
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const PostsTable = () => {
  const { error, loading, data } = useQuery(GET_ALL_POSTS);
  const [checkeds, setCheckeds] = useState([]);

  if (error) return <h1>خطا{console.log(error)}</h1>;
  if (loading) {
    return (
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const checkHandler = (event) => {
    if (event.target.id === "select-all") {
    } else {
    }
  };

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <Table
          sx={{
            width: {
              mobile: "70rem",
              tablet: "100%",
            },
          }}
          size="small"
          aria-label="posts table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "6.5rem" }} align="center">
                <Checkbox
                  size="small"
                  id="select-all"
                  name="select-all"
                  onChange={checkHandler}
                />
              </TableCell>
              <TableCell>عنوان</TableCell>
              <TableCell sx={{ width: "20rem" }} align="center">
                نویسنده
              </TableCell>
              <TableCell sx={{ width: "6.5rem" }} align="center">
                ویرایش
              </TableCell>
              <TableCell sx={{ width: "6.5rem" }} align="center">
                حذف
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.posts.map((post, index) => (
              <TableRow
                key={post.id}
                sx={{
                  "&:last-child td": { border: 0 },
                  "& td": { fontSize: "1.4rem" },
                }}
              >
                <TableCell align="center">
                  {/* {(index + 1).toString().toPersianDigits()} */}
                  <Checkbox
                    size="small"
                    key={post.id}
                    id={`${post.id}`}
                    name={post.title}
                    checked={checkeds.includes(post.id)}
                    onChange={checkHandler}
                  />
                </TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell align="center">{post.author.fullName}</TableCell>
                <TableCell align="center">
                  <IconButton
                    component={Link}
                    to={`/posts/edit/${post.id}`}
                    color="warning"
                    size="small"
                    aria-label="edit"
                  >
                    <EditRoundedIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton color="error" size="small" aria-label="delete">
                    <DeleteRoundedIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
// eslint-disable-next-line
String.prototype.toPersianDigits = function () {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

export default PostsTable;
