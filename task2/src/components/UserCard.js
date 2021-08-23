import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
// import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop:1000,
  },
  media: {
    height: "200px",
    // width:30,
    paddingTop: "58.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserCard({ user }) {
  //   console.log(d);
  const classes = useStyles();

  return (
    <div>
        <br/>
        <br/>
      <Card>
        <CardMedia className={classes.media} image={user.avatar} />
        <CardHeader title={user.first_name + " " + user.last_name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {user.email}
            <br />
            ID - {user.id}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
