import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        blue: "#657EFF",
        white: "#ffffff",
        gray: "#676566",
        black: "#151932",
    },

    fonts: {
        heading: "Poppins, Noto Sans, Arial, sans-serif",
        body: "Poppins, Noto Sans, Arial, sans-serif",
    },

    textStyles: {
        Light: {
            fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
            fontWeight: "200",
        },
        Regular: {
            fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
            fontWeight: "400",
        },
        Bold: {
            fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
            fontWeight: "700",
        },
        JBold: {
            fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
            fontWeight: "700",
        },
        JLight: {
            fontFamily: "Poppins, Noto Sans, Arial, sans-serif",
            fontWeight: "500",
        },
    },

    styles: {
        global: {
            body: {
                bg: "#fff",
                color: "#151932",
            },
        },
    },
});
