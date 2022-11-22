import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
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

  if (loading) return <h1>درحال بارگذاری</h1>;
  if (error) return <h1>خطا{console.log(error)}</h1>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="posts table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "6.5rem" }} align="center">
              ردیف
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
            <TableRow key={post.id} sx={{ "&:last-child td": { border: 0 } }}>
              <TableCell align="center">
                {(index + 1).toString().toPersianDigits()}
              </TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell align="center">{post.author.name}</TableCell>
              <TableCell align="center">
                <IconButton
                  component={Link}
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
