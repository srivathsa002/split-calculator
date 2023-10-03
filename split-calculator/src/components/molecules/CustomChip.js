import { Chip } from "@mui/material";
import React from "react";
import CustomAvatar from "../atoms/CustomAvatar";

const CustomChip = (props) => {

    const { label, handleClick, variant } = props;

    const getAvatarLabel = (givenLabel) => {
        let avatarLabel = "";
        let labelArr = givenLabel.split("");
        if (labelArr.length == 1)
            avatarLabel = labelArr[0];
        else if (labelArr.length > 1)
            labelArr.forEach((each) => avatarLabel = avatarLabel.concat(each));
        return avatarLabel;
    }

    return (
        <Chip
            avatar={<CustomAvatar avatarLabel={getAvatarLabel(label)} />}
            label={label}
            onClick={handleClick}
            variant={variant}
        />
    )

}

export default CustomChip;
