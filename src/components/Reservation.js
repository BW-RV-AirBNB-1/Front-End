// React
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getStrains, findStrain } from '../actions';

import Star from "./img/star.png"
import "./StrainCard.css";


const StrainCard = (props) => {
    
    const [reservationID, setReservationID] = useState();
 
    useEffect(() => {
        console.log(reservationID);
        if (reservationID) {
            axiosWithAuth()
            .post(`/api/reservations/`, reservationID)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }, [reservationID])

    const clickHandler = e => {
        e.preventDefault();
        console.log("ID", e.target.id);
        setReservationID({ reservationID: e.target.id });
        console.log("resID", reservationID);
        alert("Reservation Boooked!");
    };

    const reservationHolder = {
        user_id: localStorage.user.user.id,
    }


    return (
            <div className="bigBox">

            </div>

    )
}

const mapStateToProps = state => ({
    strains: state.strainReducer.strains,
    error: state.strainReducer.error,
    isFetching: state.strainReducer.isFetching
});


export default connect(
    mapStateToProps,
    { getStrains, findStrain }
)(StrainCard);