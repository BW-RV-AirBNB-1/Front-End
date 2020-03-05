import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getData } from "../actions/actions.js";

import ListingCard from "./ListingCard.js";

const ListingPage = (props) => {

    useEffect(() => {
        props.getData()
    }, [])

    return (
        <div>
            <h1>Header on the Listing Page</h1>
            {props.listings.map(item => (
                <ListingCard 
                key={item.id}
                listing={item}
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
    { getData }
)(ListingPage);

// title={props.title}
//                 description={props.description}
//                 price={props.price_per_day}
//                 id={props.id}/>