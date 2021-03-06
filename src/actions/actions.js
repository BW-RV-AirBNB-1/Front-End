import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { axiosWithAuthTwo } from "../utils/axiosWithAuthTwo.js";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const IS_ERROR = "IS_ERROR";

export const ADDING_LISTING = 'ADDING_LISTING';
export const ADDING_LISTING_SUCCESS = 'ADDING_LISTING_SUCCESS';
export const ADDING_LISTING_FAILURE = 'ADDING_LISTING_FAILURE';

export const UPDATE_LISTING = 'UPDATE_LISTING';
export const UPDATE_LISTING_SUCCESS = 'UPDATE_LISTING_SUCCESS';
export const UPDATE_LISTING_FAILURE = 'UPDATE_LISTING_FAILURE';

export const DELETE_LISTING =  'DELETE_LISTING';
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS';
export const DELETE_LISTING_FAILURE = 'DELETE_LISTING_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axiosWithAuth()
    .get("/api/listings")
    .then(res => {
        console.log(res.data);
        dispatch({ type: UPDATE_ITEMS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API", err);
        dispatch({ type: IS_ERROR, payload: "Error fetching data." });
    })
}

export const addData = (listing) => dispatch => {
    dispatch({ type: ADDING_LISTING });
    axiosWithAuth()
    .post("/api/listings/", listing)
    .then(res => {
        console.log(res.data);
        dispatch({ type: ADDING_LISTING_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API", err);
        dispatch({ type: ADDING_LISTING_FAILURE, payload: "Error fetching data." });
    })
}

export const updateData = (reservation) => dispatch => {
    dispatch({ type: UPDATE_LISTING });
    axiosWithAuth()
    .put("/api/reservations/", reservation)
    .then(res => {
        console.log(res.data);
        dispatch({ type: UPDATE_LISTING_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API", err);
        dispatch({ type: UPDATE_LISTING_FAILURE, payload: "Error updating data." });
    })
}

export const deleteData = listing => dispatch => {
    dispatch({ type: DELETE_LISTING });
    axiosWithAuth()
    .delete(`/api/listings/${listing}`)
    .then(res => {
        console.log("list" , listing)
        console.log(res.data);
        dispatch({ type: DELETE_LISTING_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API", err);
        dispatch({ type: DELETE_LISTING_FAILURE, payload: "Error deleting listing" });
    })
}

export const POST_RES = "POST_RES";
export const POST_RES_SUCCESS = "POST_RES_SUCCESS";
export const POST_RES_FAIL = "POST_RES_FAIL";

const post = {
    post_title: 'yo mama look like a sausage',
    post_text: 'idk bro'
}

export const postReservation = () => dispatch => {
    dispatch({ type: POST_RES })

    axiosWithAuthTwo()
        .post(`/29`, post)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_RES_FAIL, payload: err.response })
        })
}
