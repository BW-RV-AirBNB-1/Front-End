import React from "react";

export default function ListingCard (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Location: {props.state}</h2>
            <h2>Description: {props.description}</h2>
            <h3>Price Per Day: {props.price_per_day}</h3>
            <h2>Listing Priority: {props.id}</h2>
            <img href={props.photo_url} alt="photo of listing"/>
        </div>
    )
}