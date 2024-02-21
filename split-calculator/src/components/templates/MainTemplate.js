import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ButtonWithIcons from "../atoms/ButtonWithIcons";
import Header from "../molecules/Header";
import CustomCard from "../organisms/CustomCard";
import NamesCard from "../organisms/NamesCard";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SplitSummary from "../organisms/SplitSummary";

const detailsObj = {
    id: uuidv4(),
    item: "",
    amount: "",
    tax: ""
}

const MainTemplate = () => {

    const [eachItemSplit, setEachItemSplit] = useState([detailsObj]);
    const [itemSplitSummary, setItemSplitSummary] = useState([]);

    const [names, setNames] = useState([]);

    const handleAddItem = () => {
        let someArr = [...eachItemSplit];
        someArr.push({
            ...detailsObj,
            id: uuidv4(),
        });
        setEachItemSplit([...someArr]);
    }

    const handleDeleteItem = (id) => {
        let someArr = [...eachItemSplit];
        let filteredArr = someArr.filter(each => each.id !== id);
        setEachItemSplit([...filteredArr]);
    }

    const handleNames = (name) => {
        if (name.trim() === "") return;
        console.log("name is: " + name);
        let newNames = [...names];
        newNames.push(name);
        setNames([...newNames]);
    }

    const handleNameDelete = (nameToBeDeleted) => () => {
        let curNames = [...names];
        let filteredNames = curNames.filter((each) => each !== nameToBeDeleted);
        setNames([...filteredNames]);
    }

    const calculateSplit = (obj) => {
        setItemSplitSummary([...itemSplitSummary, {...obj}]);
    }

    return (
        <Box>
            <Header title={"Split Calculator"} />
            <Grid container direction={"column"} justifyContent={"center"}>
                <Grid item>
                    <NamesCard names={names} handleNewNames={handleNames} handleDeleteNames={handleNameDelete} />
                </Grid>
                {eachItemSplit.map((each, index) => (
                    <Grid item key={index}>
                        <Grid container direction={"column"} justifyContent={"center"} spacing={2}>
                            <Grid item>
                                <CustomCard key={index} peopleList={names} idx={index} itemSplitDetails={each} handleSplit={calculateSplit} />
                            </Grid>
                            <Grid item>
                                {/* <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                    <Grid item>
                                        <ButtonWithIcons
                                            startIcon={<AddIcon />}
                                            label={"Add Another"}
                                            variant={"outlined"}
                                            handleClick={() => handleAddItem()}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <ButtonWithIcons
                                            startIcon={<DeleteIcon />}
                                            label={"Delete"}
                                            variant={"outlined"}
                                            handleClick={() => handleDeleteItem(each.id)}
                                        />
                                    </Grid>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                <Grid item>
                    <Grid container>
                        {itemSplitSummary.map((each, index) => (
                            <Grid item key={index} xs={4}>
                                <SplitSummary splitSummaryObj={each} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainTemplate;
