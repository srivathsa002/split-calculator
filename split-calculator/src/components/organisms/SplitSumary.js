import { Card, Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const SplitSumary = (props) => {

    const { splitSummaryObj } = props;

    return (
        <Card>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h6"}>{splitSummaryObj["itemName"].charAt(0).toUpperCase() + splitSummaryObj["itemName"].slice(1)}</Typography>
                </Grid>
                <Grid item>
                    <Table>
                        <TableBody style={{borderBottom: "0 !important"}}>
                            {
                                splitSummaryObj["peopleInvolved"].map((each, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{each}</TableCell>
                                        <TableCell align={"left"}>{":"}</TableCell>
                                        <TableCell>{splitSummaryObj["perHeadCost"]}</TableCell>
                                    </TableRow>
                                ))
                            }
                    </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SplitSumary;
