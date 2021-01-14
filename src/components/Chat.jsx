import React from "react";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Man from "../img/man.png";
import Me from "../img/me.jpg";


const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "chat-row" : "chat-revers";
  

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Me} />
        ) : (
          <Avatar alt="icon" src={Man} />
        )}
      </ListItemAvatar>
      <div className="chat">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
