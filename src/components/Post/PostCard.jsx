import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BookmarkAdd, ExpandMore, Share } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



const PostCard = () => {
  return (
    <Card className=''>
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
        title="JushCode"
        subheader="@jushcode"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2024/02/22/02/05/ai-generated-8588934_1280.png"
        alt="Paella dish"
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions className='flex justify-between' disableSpacing>
        <div className=''>
            <IconButton>
              {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
            <IconButton>
              {<ShareIcon/>}
            </IconButton>
            <IconButton>
              {<ChatBubbleIcon/>}
            </IconButton>
            <IconButton>
              {<ChatBubbleIcon/>}
            </IconButton>
        </div>
        <div>
            <IconButton>
            {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
            </IconButton>
          
        </div>
        
      </CardActions>
      
    </Card>
  )
}

export default PostCard
