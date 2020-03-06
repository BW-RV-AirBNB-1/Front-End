import React from "react";

export default function ReservationForm() {

    import React, { useState } from "react";
import { connect } from "react-redux";

import  { postSmurfs } from "../actions/actions.js";
import styled from "styled-components";

const Button = styled.button`
    height: 50px;
    width: 10%;
    border-radius: 5%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: blue;

    :hover {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
`;

const ReservationForm = props => {
    
    const [reservation, setReservation] = useState({
        user_id: "",
        listings_id: "",
        is_reserved: "",
        date_from: "",
        date_to: ""
      });

    const inputHandler = e => {
        e.preventDefault()
        setReservation({ ...reservation, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postReservation(reservation);
    }

    return (
        <div>
            <form>
                <label htmlFor="user_id"></label>
                <input
                    type="text"
                    name="user_id"
                    label="user_id"
                    placeholder="Their user_id?"
                    value={props.user_id}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="Their Age?"
                    value={props.age}
                    onChange={inputHandler}
                    className="input"
                />
                <label htmlFor="height">Height</label>
                <input
                    type="text"
                    name="height"
                    label="height"
                    placeholder="What's the height?"
                    value={props.height}
                    onChange={inputHandler}
                    className="input"
                />
                <Button onClick={submitHandler} className="btn">Add This Smurf</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { postSmurfs }
)(SmurfForm);

}