import React, { useState } from "react";
import { connect } from "react-redux";


import  { ADDING_LISTING, ADDING_LISTING_SUCCESS, ADDING_LISTING_FAILURE, addData } from "../actions/actions.js";
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

const ListingForm = props => {
    
    const [listing, setListing] = useState({

      });

    const inputHandler = e => {
        e.preventDefault()
        setListing({ ...listing, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addData(listing);
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    label="title"
                    placeholder="Name:"
                    value={props.listing.name}
                    onChange={inputHandler}
                />
                <label htmlFor="description">description</label>
                <input
                    type="text"
                    name="description"
                    label="description"
                    placeholder="Enter a Description about your listing:"
                    value={props.listing.decription}
                    onChange={inputHandler}
                />
                <label htmlFor="price-per-day">Price Per Day:</label>
                <input
                    type="number"
                    name="price_per_day"
                    label="price_per_day"
                    placeholder="How much to rent per day?"
                    value={props.listing.price_per_day}
                    onChange={inputHandler}
                />
                <Button onClick={submitHandler} className="btn">Add This Listing</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { addData }
)(ListingForm);