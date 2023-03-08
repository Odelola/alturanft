export const initialThemeState = {
    theme: "light"
}

const ThemeReducer = (state, action) => {
    const { type } = action;

    switch(type){   
        case "LIGHT_MODE":
            return{
                ...state,
                theme: "light"
            };
        case "DARK_MODE":
            return{
                ...state,
                theme: "dark"
            };
        case "TOGGLE_MODE":
            return{
                ...state,
                theme: !theme
            };
        default:
            throw new Error(`No case found for the type: ${type}`);
    }
}

export default ThemeReducer;