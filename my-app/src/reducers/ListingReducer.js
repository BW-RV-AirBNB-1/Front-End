import { FETCH_DATA, UPDATE_ITEMS, IS_ERROR  } from "../actions/actions";

const initialState = {
    listings: [],
    isFetchingData: false,
    error: ""
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
        default:
            return state;
  }
};