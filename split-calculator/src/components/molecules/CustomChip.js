import { Chip, Avatar } from "@mui/material";
import React from "react";

const CustomChip = (props) => {

    const { label, handleDelete, handleClick, variant, isDeletable, color, bgColor } = props;

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
            avatar={<Avatar sx={{bgcolor: `${bgColor}`}}>{getAvatarLabel(label)}</Avatar>}
            label={label}
            onDelete={isDeletable ? handleDelete() : undefined}
            onClick={() => handleClick()}
            variant={variant}
            color={color}
        />
    )

}

export default CustomChip;
