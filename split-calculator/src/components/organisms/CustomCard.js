import { Card, CardActions, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../atoms/CustomTextField";
import ButtonWithIcons from "../atoms/IconButton";

const CustomCard = (props) => {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState("");
    const [people, setPeople] = useState([]);

    const calculateSplit = () => {

    }

    return (
        <Card raised={true}>
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
                            handleInputChange={(value) => setAmount(value)}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container justifyContent={"center"}>
                    <Grid item>
                        <ButtonWithIcons
                            label={"Calculate"}
                            variant={"contained"}
                            handleClick={calculateSplit()}
                        />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CustomCard;
