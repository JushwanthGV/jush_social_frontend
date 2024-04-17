import { Avatar, Card, CardHeader } from "@mui/material";
import React from "react";

const SearchUser = () => {
  const handleSearchUser = () => {
    console.log("Search user......");
  };

  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full"
          placeholder="search user...."
          onChange={handleSearchUser}
          type="text"
        />
      </div>
      {false && (
        <Card>
          <CardHeader
            onClick={() => {
              handleClick();
            }}
            avatar={
              <Avatar src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" />
            }
            title="Jush"
            subheader={"jush"}
          />
        </Card>
      )}
    </div>
  );
};

export default SearchUser;
