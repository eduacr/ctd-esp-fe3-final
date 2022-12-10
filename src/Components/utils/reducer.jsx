export const actions = {
    setLightTheme: "Set light theme",
    setDarkTheme: "Set dark theme ",
    setFav: "Set fav"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.setLightTheme:
            return {...state, theme: "light"}
        case actions.setDarkTheme:
            return {...state, theme: "dark"}
        case actions.setFav:
            return {...state, favs: action.payload}
        default: {return state}
    }
}