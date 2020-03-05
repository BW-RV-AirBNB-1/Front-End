import React from "react";

export default function ListingCard (props) {

    console.log(props.listing.photo_url);

        console.log("These are props from listing page" , props);

    return (
        <div>
            <h1>{props.listing.title}</h1>
            <h2>Location: {props.listing.state}</h2>
            <h2>Description: {props.listing.description}</h2>
            <h3>Price Per Day: {props.listing.price_per_day}</h3>
            <h2>Listing Priority: {props.listing.id}</h2>
            <img src={toString(props.listing.photo_url)} alt="photo of listing"/>
            <button>Reserve</button>
        </div>
    )
}