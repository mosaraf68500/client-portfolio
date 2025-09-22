import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import GalleryCardDetails from "../components/GalleryCardDetails/GalleryCardDetails";

const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/GalleryCardDetails/:id",
                 loader: () => fetch("/GalleryData.json"),
                Component:GalleryCardDetails
            }
        ]
    }
])

export default router;