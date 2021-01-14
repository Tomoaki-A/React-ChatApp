

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  btn: {
    boderColor: "primary",
    color: "primary",
    fontWeight: 600,
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "blue",
      color: "#fff",
    },
  },
}));

const Answer = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btn}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
