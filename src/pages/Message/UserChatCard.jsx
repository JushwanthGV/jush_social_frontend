import { Avatar, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const UserChatCard = () => {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            fontSize: "1.5rem",
            bgcolor: "#191c29",
            color: "rgb(88,199,250",
          }}
          src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_640.png"
        />
      }
      action={<IconButton>
        <MoreHorizIcon/>
      </IconButton>
      }
      title="Jush"
      subheader={"jush"}
    ></CardHeader>
  );
};

export default UserChatCard;
