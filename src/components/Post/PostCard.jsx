import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BookmarkAdd, ExpandMore, Share } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostAction } from "../../Redux/Post/post.action";
import { isLikedByReqUser } from "../../utils/isLikedByReqUser";

const PostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch=useDispatch();
  const {post,auth}=useSelector(store=>store);
  const handleShowComments = () => {
    setShowComments(!showComments);
  };
  const handleCreateComment = (content) => {
    const reqData = {
      postid:item.id,
      data:{
        content
      }
    }
    dispatch(createCommentAction(reqData));
  }
const handleLikePost=()=>{
  dispatch(likePostAction(item.id))
}

console.log("is liked by requested user",isLikedByReqUser(auth.user.id, item));

  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          item && item.user ? (
            <>
              <Typography variant="h5">
                {item.user.firstName + " " + item.user.lastName}
              </Typography>
              <Typography variant="subtitle1">
                {"@" +
                item.user.firstName.toLowerCase() +
                "_" +
                item.user.lastName.toLowerCase()}
              </Typography>
            </>
          ) : (
            "no user"
          )
        }
      />
      {/* <CardMedia
        component="img"
        height="100"
        image={item.image}
        alt="Paella dish"
      /> */}
      <img className="w-full  max-h-[30rem] object-cover object-top" src={item && item.image ? item.image : 'defaultImage'} alt="" />
      <CardContent>
  <Typography variant="body2" color="text.secondary">
    {item && item.caption ? item.caption : 'No caption'}
  </Typography>
</CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div className="">
          <IconButton onClick={handleLikePost}>
            {isLikedByReqUser(auth.user.id, item)? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>{<ShareIcon />}</IconButton>
          <IconButton onClick={handleShowComments}>{<ChatBubbleIcon />}</IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>

      {showComments && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar sx={{}} />
            <input
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("enter pressed....", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              placeholder="write your comment..."
              type="text"
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            
              {item.comments?.map((comment)=><div className="flex items-center space-x-5">
                <Avatar
                  sx={{ height: "2rem", width: "2rem", fontSize: "1rem" }}
                >
                  {comment.user.firstName[0]}   
                </Avatar>
                <p>{comment.content}</p>
              </div>)}
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
