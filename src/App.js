
import React from "react";

import ReactDOM from "react-dom/client";  

import Header from "./components/Header";

import Body from "./components/Body";

import Footer from "./components/Footer";

import About from "./components/About";

import Error from "./components/Error";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";



/**
             * Header
             *   -Logo
             *   -NavItems
             *   -Cart
             *   
             *   Body
             *     -SearcHbar
             *     -restaurantList
             *     -restaurantCard
             *       -Image
             *       -Name
             *       -Rating
             *       -Cuisines
             * 
             *    Footer
             *     -Links 
             *     -CopyRights
             * 
             *  
             * 
             */ 

/*
const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>

            <Footer/>
            </>
            
        
    );
};


const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    },

    {
        path:"/about",
        element:<About/>,
    },

]);
*/

/*
const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <About/>
            <Body/>
            
            <Contact/>
            <Footer/>
            </>
            
        
    );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[{
        path:"/about",
        element:<About/>,
    },
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

*/


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
            
        
    );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

