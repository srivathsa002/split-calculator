import { IndeterminateCheckBox } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import NameCard from '../molecules/NameCard';

const selectItems = state => state.items;
const selectFriends = state => state.friends;

const Summary = () => {

    const itemsList = useSelector(selectItems);
    const friendsList = useSelector(selectFriends);

    const getTotalCost = () => {
        let total = 0;
        itemsList.forEach(item => total += item.totalCost);
        return `$ ${total.toFixed(2)}`;
    }

    const getIndividualCost = (id) => {
        let total = 0;
        itemsList.forEach(item => total += item.friendsInvolved.filter(each => each.id === id).length !==0 ? item.friendsInvolved.filter(each => each.id === id)[0].splitAmount : 0);
        // itemsList.forEach(item => total += item.totalCost);
        return `$ ${total.toFixed(2)}`;
    }

    return (
        <Stack direction={"column"} alignItems={"stretch"} justifyContent={"flex-start"} spacing={3}>
            <Typography variant={"body1"} color={"textPrimary"}>
                {"Summary"}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <NameCard name={"Total"} itemCount={itemsList.length} displayAvatar={false} />
                <Typography variant={"body1"} color={"textPrimary"}>
                    { getTotalCost() }
                </Typography>
            </Stack>
            {
                friendsList.length > 0 &&
                    <Stack direction={"column"} alignItems={"stretch"} justifyContent={"flex-start"} spacing={3}>
                        {friendsList.map((friend, index) => (
                            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} key={IndeterminateCheckBox}>
                                <NameCard
                                    key={index}
                                    displayAvatar={true}
                                    name={friend.name}
                                    colorCode={index}
                                    itemCount={itemsList.filter(item => item.friendsInvolved.filter(each => each.id === friend.id)[0]).length}
                                />
                                <Typography variant={"body1"} color={"textPrimary"}>
                                    { getIndividualCost(friend.id) }
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
            }
        </Stack>
    )
}

export default Summary;
