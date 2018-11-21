import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";

class Message extends Component {
  state = {
    open: this.props.open
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    console.log("this.props.open dd", this.state.open, this.props.open);
    const { message, success } = this.props;
    const { open } = this.state;
    return (
      <Snackbar
        className={
          this.props.success ? "message-div success" : "message-div error"
        }
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        open={this.props.open}
        onClose={this.handleClose}
        ContentProps={{ "aria-describedby": "message-id" }}
        message={<span id="message-id">{message}</span>}
      />
    );
  }
}

export default withRouter(Message);
