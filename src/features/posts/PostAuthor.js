import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unkonwkn author"}</span>;
};

export default PostAuthor;
