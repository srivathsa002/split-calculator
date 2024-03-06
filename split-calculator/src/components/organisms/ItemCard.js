import { Stack, Typography } from "@mui/material";
import React from "react";

const ItemCard = ( props ) => {

    const { item, getFriendsNames } = props;

    return (
        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={3}>
            <div style={{ width: 100, height: 65 }}>
                <img src={"./assets/grocery.jpeg"} style={{ backgroundSize: "cover", maxWidth: "100%"}} />
            </div>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} spacing={1}>
                <Typography variant={"body1"} color={"textPrimary"}>
                    {item.name}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"}>
                    {`Split with ${getFriendsNames(item.friendsInvolved)}`}
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"}>
                    {`$ ${Number(item.totalCost).toFixed(2)}`}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default ItemCard;
