import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddItem from "../components/organisms/AddItem";
import HomeCard from "../components/organisms/HomeCard";
import Items from "../components/organisms/Items";
import SplitSummaryy from "../components/organisms/SplitSummaryy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeCard />
            },
            {
                path: "/items",
                element: <Items />,
            },
            {
                path: "/items/addItem",
                element: <AddItem />,
            },
            {
                path: "/splitSummary",
                element: <SplitSummaryy />
            }
        ],
    },
]);
