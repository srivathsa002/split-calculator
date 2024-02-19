import { Chip } from "@mui/material";
import React from "react";
import CustomAvatar from "../atoms/CustomAvatar";

const CustomChip = (props) => {

    const { label, handleDelete, variant } = props;

    const getAvatarLabel = (givenLabel) => {
        let avatarLabel = "";
        let labelArr = givenLabel.trim().split(" ");
        if (labelArr.length === 1)
            avatarLabel = labelArr[0][0].toUpperCase();
        else if (labelArr.length > 1)
            labelArr.forEach((each) => avatarLabel = avatarLabel.concat(each[0]));
        return avatarLabel;
    }

    return (
        <Chip
            avatar={<CustomAvatar avatarLabel={getAvatarLabel(label)} />}
            label={label}
            onDelete={handleDelete}
            variant={variant}
        />
    )

}

export default CustomChip;
