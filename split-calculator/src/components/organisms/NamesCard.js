import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonWithIcons from "../atoms/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import CustomChip from "../molecules/CustomChip";
import CustomTextField from "../atoms/CustomTextField";

const NamesCard = () => {

    const [name, setName] = useState("");

    const [names, setNames] = useState([]);

    const handleNames = () => {
        if (name.trim() === "") return;
        let newNames = [...names];
        newNames.push(name);
        setNames([...newNames], name);
        setName("");
    }

    const handleNameDelete = (nameToBeDeleted) => {
        setNames(names.filter((each) => each !== nameToBeDeleted));
    }

    return (
        <Card>
            <CardContent>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} rowSpacing={1}>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <Grid item>
                                <CustomTextField
                                    label={"Name"}
                                    variant={"outlined"}
                                    value={name}
                                    handleInputChange={(value) => setName(value)}
                                />
                            </Grid>
                            <Grid item>
                                <ButtonWithIcons
                                    icon={<CheckIcon />}
                                    variant={"contained"}
                                    handleClick={() => handleNames()}
                                    isDisabled={(name === "") ? true : false }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {names.length > 0 &&
                        <Grid item>
                            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                                <Grid item>
                                    <Typography variant="body2">{"People Added:"}</Typography>
                                </Grid>
                                {names.map((each, index) => (
                                        <Grid item key={index}>
                                            <CustomChip
                                                label={each}
                                                handleDelete={() => handleNameDelete(each)}
                                                variant={"outlined"}
                                            />
                                        </Grid>))
                                }
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}

export default NamesCard;
