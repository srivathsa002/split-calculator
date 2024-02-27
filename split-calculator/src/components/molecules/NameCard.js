import { Avatar, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { colorCodes } from "../../utils/colorCodes";

const NameCard = (props) => {

    const { name, colorCode } = props;

    const getAvatarLabel = (givenName) => {
        let avatarLabel = "";
        let labelArr = givenName.trim().split(" ");
        if (labelArr.length === 1)
            avatarLabel = labelArr[0][0].toUpperCase();
        else if (labelArr.length > 1)
            labelArr.forEach((each) => avatarLabel = avatarLabel.concat(each[0]));
        return avatarLabel;
    }

    const getFirstName = (givenName) => {
        return givenName.split(" ")[0];
    }

    const getColor = (code) => {
        return colorCodes[code];
    }

    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Avatar sx={{ bgcolor: getColor(colorCode), width: 60, height: 60 }}>
                <Typography variant={"h5"}>
                    {getAvatarLabel(name)}
                </Typography>
            </Avatar>
            <Stack direction={"column"} spacing={1}>
                <Typography variant={"body1"} color={"primary"}>
                    {name}
                </Typography>
                <Typography variant={"body2"} color={grey[500]}>
                    {getFirstName(name)}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default NameCard;
