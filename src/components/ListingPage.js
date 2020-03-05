import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getData } from "../actions/actions.js.js";

import ListingCard from "./ListingCard.js.js";

const ListingPage = (props) => {

    useEffect(() => {
        props.getData()
    }, [])

    return (
        <div>
            <h1>Header on the Listing Page</h1>
            {props.listings.map(listing => (
                <ListingCard 
                listing={listing}
                title={props.title}
                description={props.description}
                price={props.price_per_day}
                id={props.id}/>
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
    { getData }
)(ListingPage);