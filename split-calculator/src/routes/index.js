import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddItem from "../components/organisms/AddItem";
import EditItem from "../components/organisms/EditItem";
import HomeCard from "../components/organisms/HomeCard";
import Items from "../components/organisms/Items";
import SummaryTemplate from "../components/templates/SummaryTemplate";

export const router = createBrowserRouter([
    {
        path: "/split-calculator/",
        element: <App />,
        children: [
            {
                path: "/split-calculator/",
                element: <HomeCard />
            },
            {
                path: "/split-calculator/items",
                element: <Items />,
            },
            {
                path: "/split-calculator/items/addItem",
                element: <AddItem />,
            },
            {
                path: "/split-calculator/items/:id/edit",
                element: <EditItem />,
            },
            {
                path: "/split-calculator/splitSummary",
                element: <SummaryTemplate />
            }
        ],
    },
]);
