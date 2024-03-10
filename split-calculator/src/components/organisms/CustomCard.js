import { Box, CardActions, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../atoms/CustomTextField";
import ButtonWithIcons from "../atoms/ButtonWithIcons";
import CustomChip from "../molecules/CustomChip";
import CustomSelect from "../molecules/CustomSelect";

const taxItems = [
    {
        "label": "1%",
        "value": 1
    },
    {
        "label": "6%",
        "value": 6
    }
];

const CustomCard = (props) => {

    const { peopleList, idx, itemSplitDetails, handleSplit } = props;

    const [item, setItem] = useState(itemSplitDetails.item);
    const [amount, setAmount] = useState(itemSplitDetails.amount);
    const [tax, setTax] = useState(itemSplitDetails.tax);
    const [people, setPeople] = useState([]);

    const handleAmountInput = (val) => {
        let validAmountReg = new RegExp(/^\d*\.?\d*$/);
        validAmountReg.test(val) ? setAmount(val) : setAmount(amount);
    }

    const handlePeopleSelection = (name) => {
        let peopleArr = [...people];
        if (peopleArr.includes(name)) {
            peopleArr.filter(each => each !== name);
        } else {
            peopleArr.push(name);
        }
        setPeople([...peopleArr]);
    }

    const calculateSplit = () => {
        const obj = {
            "itemName": item,
            "totalCost": amount,
            "perHeadCost": (amount + (amount * (tax/100)))/people.length,
            "peopleInvolved": [...people]
        };
        handleSplit({...obj});
    }

    return (
        <Box>
            <CardContent>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} rowSpacing={1}>
                    <Grid item>
                        <CustomTextField
                            label={"Item"}
                            variant={"outlined"}
                            value={item}
                            handleInputChange={(value) => setItem(value)}
                        />
                    </Grid>
                    <Grid item>
                        <CustomTextField
                            label={"Amount"}
                            variant={"outlined"}
                            value={amount}
                            handleInputChange={(value) => handleAmountInput(value)}
                        />
                    </Grid>
                    <Grid item>
                        <CustomSelect
                            labelId={`tax-${idx + 1}`}
                            value={tax}
                            label={"Tax"}
                            onOptionChange={(val) => setTax(val)}
                            itemsList={[...taxItems]}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} spacing={2}>
                            {
                                peopleList.map((each, index) => (
                                    <Grid item key={index}>
                                        <CustomChip
                                            label={each}
                                            variant={"outlined"}
                                            handleClick={() => handlePeopleSelection(each)}
                                            isDeletable={false}
                                            color={people.includes(each) ? "success" : "default"}
                                            bgColor={people.includes(each) ? "#ff5722" : "default"}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justifyContent={"center"}>
                    <Grid item>
                        <ButtonWithIcons
                            label={"Calculate Split"}
                            variant={"contained"}
                            handleClick={calculateSplit}
                            isDisabled={people.length === 0}
                        />
                    </Grid>
                </Grid>
            </CardActions>
        </Box>
    );
}

export default CustomCard;
