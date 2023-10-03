import { Avatar } from "@mui/material";
import React from "react";

const CustomAvatar = (props) => {

    const { avatarLabel } = props;

    return <Avatar>{avatarLabel}</Avatar>
}

export default CustomAvatar;
