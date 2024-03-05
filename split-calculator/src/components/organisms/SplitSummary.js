import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { useSelector } from "react-redux";

const selectItems = state => state.items;
const selectFriends = state => state.friends;

const SplitSummary = () => {

    const itemsList = useSelector(selectItems);


    return (
        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"stretch"} spacing={2}>
            <Typography variant={"h5"} color={"textPrimary"}>
                {"Split Summary"}
            </Typography>
            {
                itemsList.map((item, index) => 
                    (
                        <Accordion key={index}>
                            <AccordionSummary
                                id={`item-${index}`}
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Stack direction={"row"} justifyContent={"stretch"} alignItems={"center"}>
                                    <Typography variant={"h6"} color={"textPrimary"}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant={"h6"} color={"textPrimary"}>
                                        {`$ ${item.totalCost.toFixed(2)}`}
                                    </Typography>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.friendsInvolved}
                            </AccordionDetails>
                        </Accordion>
                    )
                )
            }
            
        </Stack>
    )
}

export default SplitSummary;
