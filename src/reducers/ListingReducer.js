import { 
    FETCH_DATA, 
    UPDATE_ITEMS, 
    IS_ERROR,
    POST_RES,
    POST_RES_FAIL,
DELETE_LISTING,
DELETE_LISTING_SUCCESS,
DELETE_LISTING_FAILURE,
ADDING_LISTING_FAILURE,
ADDING_LISTING  } from "../actions/actions";

const initialState = {
    listings: [],
    isFetchingData: false,
    error: "",
    reservation: [],
    listing: []
  };
  
export const ListingReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA:
          return {
              ...state,
              isFetchingData: true,
            };
        case UPDATE_ITEMS:
            return {
                ...state,
                isFetchingData: false,
                listings: action.payload
            }
        case IS_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
            case POST_RES:
                return {
                    ...state,
                    reservation: {
                        user_id: 0,
                        listings_id: 1,
                        is_reserved: false,
                        date_from: "",
                        date_to: ""
                    }
                }
            case POST_RES_FAIL:
                return {
                    ...state,
                    error: action.payload
                }
                case DELETE_LISTING:
                return {
                    ...state,
                    listings: [],
                    isDeleting: true,
                    errors: ''
                }
            case DELETE_LISTING_SUCCESS:
                return {
                    ...state,
                    listings: action.payload,
                    isDeleting: false,
                    errors: ''
                }
            case DELETE_LISTING_FAILURE:
                return {
                    ...state,
                    isDeleting: false,
                    errors: action.payload
                }
                case ADDING_LISTING:
                return {
                    ...state,
                    listing: {
                        state_id: 0,
                        user_id: 1,
                        title: "",
                        description: "",
                        price_per_day: ""
                    }
                }
            case ADDING_LISTING_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }

        default:
            return state;   
  }
};