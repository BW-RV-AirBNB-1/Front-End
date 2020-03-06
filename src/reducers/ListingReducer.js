import { 
    FETCH_DATA, 
    UPDATE_ITEMS, 
    IS_ERROR,
    POST_RES,
    POST_RES_FAIL  } from "../actions/actions";

const initialState = {
    listings: [],
    isFetchingData: false,
    error: "",
    reservation: []
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
        default:
            return state;   
  }
};