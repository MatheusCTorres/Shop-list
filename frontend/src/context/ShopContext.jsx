import { createContext, useReducer } from "react"

export const ShopsContext = createContext()

export const shopsReducer = (state, action) => {
    switch (action.type) {
        case "SET_SHOPS":
            return {
                shops: action.payload
            }
        case "CREATE_SHOP":
            return {
                shops: [action.payload, ...state.shops]
            }
        case "DELETE_SHOP":
            return {
                shops: state.shops.filter((finder) => finder._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ShopsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shopsReducer, {
        shops: null // initial value
    })

    // dispatch is used to update the state
    return (
        <ShopsContext.Provider value={{ ...state, dispatch }}>
            {/* it is the app component from main */}
            {children}
        </ShopsContext.Provider >
    )
}