const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            if (state.myList.filter(items => items.id === action.payload.id).length !== 0) {
                return state;
            }
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'SEARCH_VIDEO':
            let search
            search = state.trends.filter(items => items.title.toLowerCase().includes(action.payload.toLowerCase()) === true)
            search = search.concat(state.originals.filter(items => items.title.toLowerCase().includes(action.payload.toLowerCase()) === true))
            search = search.concat(state.myList.filter(items => items.title.toLowerCase().includes(action.payload.toLowerCase()) === true))
            search.forEach((item, index) => {
                search.forEach((item2, index2) => {
                    if (index != index2 && item.id === item2.id)
                        search[index2] = "";
                });
            });
            return {
                ...state,
                search: search.filter(item => item !== "")
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(items => items.id === Number(action.payload))
                    || state.originals.find(items => items.id === Number(action.payload))
                    || []
            }
        default:
            return state;
    }
}

export default reducer;