import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const IS_ERROR = "IS_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("")
    .then(res => {
        console.log(res.data);
        dispatch({ type: UPDATE_ITEMS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API", err);
        dispatch({ type: IS_ERROR, payload: "Error fetching data." });
    })
}