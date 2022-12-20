import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Conversation = () => {
  return (
    <ListItem sx={{ alignItems: "flex-start" }}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography>Brunch this weekend?</Typography>}
              secondary={
                <>
                  <Typography
                    variant="body2"
                    component="span"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>{" "}
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            ></ListItemText>
          </ListItem>
  )
}

export default Conversation