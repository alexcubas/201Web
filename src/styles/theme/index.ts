import { extendTheme } from "@chakra-ui/react";

//Usa isso pra validar a página que vc quer
const breakpoints = {
    base: "0rem",
    sm: "30rem", //480px
    md: "64rem", //1024px
    lg: "86rem", // 1360px
    xlg: "120rem", //1920px
};

export const theme = extendTheme({
    breakpoints,

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
