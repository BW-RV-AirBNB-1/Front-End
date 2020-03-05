import React, { useState } from "react";

import  ListingPage  from "./ListingPage.js";

export default function Dashboard() {

    const [isOwner, setIsOwner] = useState(localStorage.getItem("user"));
    console.log(isOwner);

    // const landOwner = isOwner.user.is_land_owner


    // const window = localStorage.getItem("user");    console.log(window);

    return (
        <div>
            <h1>This is the homepage</h1>
            <ListingPage />
             
        </div>
    )
}