const IS_LOGGED = "IS_LOGGED"

export default function UseReducer(state, action) {
    const { payload, type } = action
    switch (type) {
        case IS_LOGGED:
            return { ...state, isLoggedIn: payload }
    }
}