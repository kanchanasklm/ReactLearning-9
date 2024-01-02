/*
const RestaurantMenu=()=>{
    return(
        <>
        <h1>Restaurant id:123</h1>
        <h2>Namste</h2></>
    )
}

export default RestaurantMenu;
*/



import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import { IMG_CDN_URL } from "./Constants";
import Shimmer from "../Shimmer";

const RestaurantMenu=()=>{
    // const params=useParams()
    // console.log(params)

    const{ resId }= useParams()
    const[restaurant,setRestaurant]=useState(null)

    useEffect(()=>{
        getRestaurantInfo()
    },[])
   
    async function getRestaurantInfo(){
        // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId)
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId)
        const json=await data.json()
        console.log(json.data);
        console.log(json?.data?.cards[0]?.card?.card?.info)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }
    return(!restaurant)? <Shimmer/> :(
        <>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img className="image"src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h2>{restaurant.area}</h2>
        <h2>{restaurant.city}</h2>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessages}</h3>

        </>
    )
}

export default RestaurantMenu;