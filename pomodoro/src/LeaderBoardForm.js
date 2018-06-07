import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import logo from "./logo.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";
import "./App.css";
import PropTypes from "prop-types";
import firebase from "./Firebase";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});
class LeaderBoardForm extends Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="formcenter">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            onChange={e => this.props.updateParent("name", e.target.value)}
            margin="normal"
          />
          <TextField
            id="cycles"
            type="number"
            label="Cycles"
            className={classes.textField}
            onChange={e => this.props.updateParent("cycles", e.target.value)}
            margin="normal"
          />

          <Select
            label="Gender"
            id="gender"
            onChange={e => this.props.updateParent("gender", e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </form>
        <Button
          variant="raised"
          color="primary"
          onClick={e => this.props.clicker(e)}
        >
          Submit
        </Button>
      </div>
    );
  }
}

LeaderBoardForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LeaderBoardForm);
