import React from "react";

import PropTypes from "prop-types";
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: "light",
        primary: {
            main: "#15629e",
            light: "#96c5e6",
            dark: "#042137",
        },
        secondary: {
            main: "#ffad3d",
            dark: "#f4511e",
            light: "#ffd667",
        },
    },
    typography: {
        fontFamily: "Nunito",
        body1: {
            fontFamily: "Nunito",
        },
        h1: {
            fontFamily: "Nunito",
        },
    },
    shape: {
        borderRadius: 0,
    },
};

export function MyThemeProvider(props) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(adaptV4Theme(themeOptions))} {...props}>
                {props.children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

MyThemeProvider.propTypes = {
    children: PropTypes.any,
};