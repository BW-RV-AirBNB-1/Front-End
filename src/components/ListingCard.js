import React, { useState } from "react";

import { postReservation } from "../actions/actions.js";
import { connect } from "react-redux";


import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #001f3f;
    color: #0074D9;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2%;
    h1 {
        display:flex;
    }
`;

const Button = styled.button`
    background: none;
    width: 10%;
    height: 50px;
    color: #0074D9;
    border: 1px solid #0074D9;
    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        color: white;
    }
`;

const ListingCard = props => {

    const userID = localStorage.getItem("user");
    console.log(userID)

    const [cardState, setCardState] = useState({
        user_id: userID,
        listings_id: props.listing.id,
        is_reserved: true,
        reserved_from: "",
        reserved_to: ""
    })

    const handleChanges = (e) => {
        setCardState({ ...cardState, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        console.log(cardState);
        props.postReservation(cardState);
        setReservation(!reservation); 
    }
    console.log("ID", props.listing.id)

    const [reservation, setReservation] = useState(false);
    const [filled, setfilled] = useState()

    console.log(props.listing.photo_url);

        console.log("These are props from listing page" , props);

        const goToReservation = () => {
            setReservation(!reservation); 
        }

        const deleteID = (e) => {
            props.deleteData(props.listing.id);
        }
      

        return (
            <Card>
            <h3>Card</h3>
            <h1>{props.listing.title}</h1>
            <h2>Location: {props.listing.state}</h2>
            <h2>Description: {props.listing.description}</h2>
            <h2>Listing Priority: {props.listing.id}</h2>
            <Button onClick={goToReservation}>Reserve</Button>
            <Button onClick={deleteID}>Delete</Button>
            </Card>
        )
        // (
        //     <Card>
        //     <h2>Reservation Form</h2>
        //     <form onSubmit={onSubmit}>
        //     <label htmlFor="date_from">When will your trip begin?
        //         <input type="date" name="date_from" onChange={handleChanges} value={cardState.date_from} min="2020-01-01" max="2020-12-31" />
        //     </label>
        //     <label htmlFor="date_to">When will you return?
        //         <input type="date" name="date_to" value={cardState.reserved_to} onChange={handleChanges} min="2020-01-01" max="2020-12-31"/>
        //         </label>
        //     <Button onClick={onSubmit}>Reserve</Button>
        //     </form>
        //     </Card>
        // )
}
const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { postReservation }
)(ListingCard);