import { Snackbar } from "@mui/material";
import React from "react";

const SnackBar = (props) => {

    const {open, message} = props;

    return <Snackbar open={open} message={message} />

}

export default SnackBar;
