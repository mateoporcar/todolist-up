import { useReducer } from "react"
import UseReducer from "./UseReducer"
import Context from "./Context"
export default function UseContext({ children }) {
    const initialState = { isLoggedIn: false }
    const [state, dispatch] = useReducer(UseReducer, initialState)
    const logged = (isLoggedIn) => {
        console.log(isLoggedIn)
        dispatch({ type: "IS_LOGGED", payload: isLoggedIn })
    }
    console.log(initialState.isLoggedIn)
    return (
        <Context.Provider value={{ logged, isLoggedIn: state.isLoggedIn }}>
            {children}
        </Context.Provider >
    )
}