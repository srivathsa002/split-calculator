import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddItem from "../components/organisms/AddItem";
import EditItem from "../components/organisms/EditItem";
import HomeCard from "../components/organisms/HomeCard";
import Items from "../components/organisms/Items";
import SummaryTemplate from "../components/templates/SummaryTemplate";

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
                path: "/items/:id/edit",
                element: <EditItem />,
            },
            {
                path: "/splitSummary",
                element: <SummaryTemplate />
            }
        ],
    },
]);
