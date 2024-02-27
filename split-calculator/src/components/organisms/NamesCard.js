import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import CustomChip from "../molecules/CustomChip";
import CustomTextField from "../atoms/CustomTextField";

const NamesCard = (props) => {

    const { handleNewNames, handleDeleteNames, names } = props;
    const [name, setName] = useState("");

    const handleNames = () => {
        handleNewNames(name);
        setName("");
    }

    return (
        <CardContent>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} rowSpacing={1}>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                        <Grid item>
                            <CustomTextField
                                label={"Name"}
                                variant={"outlined"}
                                value={name}
                                handleInputChange={(value) => setName(value)}
                            />
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleNames()} disabled={name === ""}>
                                <CheckIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                {names.length > 0 && (
                    <Grid item>
                        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                            <Grid item>
                                <Typography variant="body2">{"People Added:"}</Typography>
                            </Grid>
                            {names.map((each, index) => (
                                    <Grid item key={index}>
                                        <CustomChip
                                            label={each}
                                            handleDelete={() => handleDeleteNames(each)}
                                            handleClick={() => {}}
                                            variant={"outlined"}
                                            isDeletable={true}
                                            bgColor={"#ff5722"}
                                        />
                                    </Grid>))
                            }
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </CardContent>
    );
}

export default NamesCard;
