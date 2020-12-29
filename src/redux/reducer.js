
import itemActionTypes from "./types"

const INITIAL_STATE = {
    listItems: [
        {        
            id:'',
            item:''
        }      
    ]
}

const itemReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case itemActionTypes.ADD_ITEM_TO_LIST:
            return{
                ...state,
                listItems: [...state.listItems, action.payload]   
            }
        case itemActionTypes.DELETE_ITEM_FROM_LIST:
            return{
                ...state,
                listItems: state.listItems.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default itemReducer