import { Stack } from "@mui/system";
import React from "react";
import Header from "../organisms/Header";
import Body from "./Body";

const Structure = () => {
    return (
        <Stack direction={"column"} spacing={8}>
            <Header />
            <Body />
        </Stack>
    );
};

export default Structure;
