import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"

import { connect } from "react-redux";
import { getData, updateData } from "../actions/actions.js";

import ListingCard from "./ListingCard.js";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import styled from "styled-components";

const Button = styled.button`
    background: none;
    width: 10%;
    height: 50px;
    color: #0074D9;
    border: 1px solid #0074D9;
    margin-right:2%;
    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        color: green;
    }
`;

const ListingPage = (props) => {

    const [data, setData] = useState([]);

    const getReservations = () => {
        axiosWithAuth()
        .get("api/reservations")
        .then(res => {
            setData(res.data)
            console.log(res.data);
        })
        .catch(err => {
            console.log("this is error", err);
        })
    }

    useEffect(() => {
        setData(props.listings)
    }, [])

    console.log(props.listings, "listings page listing")
    
    // const listing2 = {
    //     user_id: 0,
    //     listing_id: 3,
    //     reserved: false,
    //     reserved_from: "",
    //     reserved_to: ""
    // }
    // props.updateData(listing2);

    return (
        <div>
            <h1>Header on the Listing Page</h1>
            <Button onClick={getReservations}>Get Reservations</Button>
            {data.map(listing => (
                <ListingCard 
                key={listing.id}
                listing={listing}
                />
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { getData, updateData }
)(ListingPage);

// title={props.title}
//                 description={props.description}
//                 price={props.price_per_day}
//                 id={props.id}/>