import React, { useState } from "react";

import  ListingPage  from "./ListingPage.js";

export default function Dashboard() {

    const [isOwner, setIsOwner] = useState(localStorage.getItem("user"));
    console.log(isOwner);

    return (
        <div>
            <h1>This is the homepage</h1>
            <ListingPage />
             
        </div>
    )
}