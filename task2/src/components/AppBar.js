import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import photo from "../image/photo.jpg"

import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // marginTop:"50px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FC766AFF",
    padding: "10px",
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const history = useHistory();
  return (
    <div className={classes.root}>
      <Typography>
        <img src={photo} style={{ width: 120 }}></img>
      </Typography>
      <Typography variant="h4" color="dark" style={{ marginLeft: "20px","font-family":"lauren","font-size":"100px" }}>
        TITAN
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          history.push("/getusers");
        }}
        style={{ backgroundColor: "white", color: "#5F4B8BFF" }}
      >
        Get User
      </Button>
    </div>
  );
}
