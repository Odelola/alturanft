import { createContext, useReducer } from "react";
import ThemeReducer, { initialThemeState } from "../reducers/ThemeReducer";

export const ThemeContext = createContext(initialThemeState);

export function ThemeContextProvider({ children }) {
    const [state, dispatch] = useReducer(ThemeReducer, initialThemeState);
    const giveLightTheme =()=> {
        dispatch({ type: "LIGHT_MODE" });
    };
    const giveDarkTheme = () => {
        dispatch({ type: "DARK_MODE" });
    };
    const value = {
        theme: state.theme,
        giveLightTheme,
        giveDarkTheme
    };
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}