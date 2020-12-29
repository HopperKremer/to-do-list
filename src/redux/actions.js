import itemActionTypes from "./types"

export const addItem = item => (
    {
        type: itemActionTypes.ADD_ITEM_TO_LIST,
        payload: item
    }
)

export const deleteItem = id => (
    {
        type: itemActionTypes.DELETE_ITEM_FROM_LIST,
        payload: id
    }
)