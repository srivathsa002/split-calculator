import { Avatar, Accordion, AccordionDetails, AccordionSummary, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { useSelector } from "react-redux";
import NoContent from "../molecules/NoContent";
import { colorCodes } from "../../utils/colorCodes";

const selectItems = state => state.items;
const selectFriends = state => state.friends;

const SplitSummary = () => {

    const itemsList = useSelector(selectItems);
    const friendsList = useSelector(selectFriends);

    const getAvatarLabel = (givenName) => {
        let avatarLabel = "";
        let labelArr = givenName.trim().split(" ");
        if (labelArr.length === 1)
            avatarLabel = labelArr[0][0].toUpperCase();
        else if (labelArr.length > 1)
            labelArr.forEach((each, index) => index <= 1 ? avatarLabel = avatarLabel.concat(each[0]) : null);
        return avatarLabel;
    }

    const getColor = (code) => {
        return colorCodes[code % 8];
    }

    return (
        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"stretch"} spacing={2}>
            <Typography variant={"h5"} color={"textPrimary"}>
                {"Split Summary"}
            </Typography>
            {
                itemsList.length === 0 ? (<NoContent text={"Please add items to get started"} />) :
                itemsList.map((item, index) => 
                    (
                        <Accordion key={index}>
                            <AccordionSummary
                                id={`item-${index}`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: "-webkit-fill-available", marginRight: "4px" }}>
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                                        <Typography variant={"h6"} color={"textPrimary"}>
                                            {item.name}
                                        </Typography>
                                        <Stack direction={"row"} justifyContent={'space-between'} alignItems={"center"} spacing={1}>
                                            {item.friendsInvolved.map((each, idx) => (
                                                <Avatar key={idx} sx={{ bgcolor: getColor(friendsList.findIndex(elm => elm.name === (friendsList.filter(friend => friend.id === each.id)[0].name))), width: 30, height:30  }}>
                                                    <Typography variant={"body2"}>
                                                        {getAvatarLabel(friendsList.filter(friend => friend.id === each.id)[0].name)}
                                                    </Typography>
                                                </Avatar>
                                            ))}
                                        </Stack>
                                    </Stack>
                                    <Typography variant={"h6"} color={"textPrimary"}>
                                        {`$ ${item.totalCost.toFixed(2)}`}
                                    </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction={"roww"} justifyContent={"center"} alignItems={"center"}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant={"body1"} color={"textPrimary"}>
                                                        {"Friend"}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align={"right"}>
                                                    <Typography variant={"body1"} color={"textPrimary"}>
                                                        {"Split Amount"}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                item.friendsInvolved.map((each, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>
                                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                                {friendsList.filter(friend => friend.id === each.id)[0].name}
                                                            </Typography>
                                                            </TableCell>
                                                        <TableCell align={"right"}>
                                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                                {`$ ${each.splitAmount}`}
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    )
                )
            }
        </Stack>
    )
}

export default SplitSummary;
