import React from 'react'
import {
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share,
  } from "@mui/icons-material";
  import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Checkbox,
  } from "@mui/material";

const Post = () => {
  return (
    <>
      <Card sx={{marginBottom:8}} elevation={5}>
        <CardHeader
          title="media 1"
          avatar={<Avatar />}
          subheader="september 14 , 2016"
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
        />

        <CardMedia
          component="img"
          src="data:image/jpeg;base64,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"
        />
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            modi maiores, corporis minus corrupti dignissimos deleniti. Facilis
            libero praesentium assumenda pariatur similique numquam harum. Dicta
            tempore suscipit aliquid non velit?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Post