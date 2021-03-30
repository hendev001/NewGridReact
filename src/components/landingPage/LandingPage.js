import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ display: "flex", margin: "20px 20px" }}>
        <TextField
          label="Add 1"
          variant="outlined"
          size="small"
          style={{ width: "500px" }}
        />
        <TextField
          label="FullName"
          variant="outlined"
          size="small"
          style={{ width: "400px", margin: "0 10px" }}
        />
      </div>
      <div style={{ display: "flex", margin: "20px 20px" }}>
        <TextField
          label="Add 2"
          variant="outlined"
          size="small"
          style={{ width: "500px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          style={{ width: "400px", margin: "0 10px" }}
        />
      </div>
      <div style={{ display: "flex", margin: "20px 20px" }}>
        <TextField
          label="City"
          variant="outlined"
          size="small"
          style={{ width: "200px" }}
        />
        <TextField
          label="State"
          variant="outlined"
          size="small"
          style={{ width: "100px", margin: "0 10px" }}
        />
        <TextField
          label="Zip"
          variant="outlined"
          size="small"
          style={{ width: "179px", margin: "0 1px" }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          size="small"
          style={{ width: "400px" , margin: "0 9px"}}
        />
      </div>
    </div>
  );
}
export default LandingPage;
