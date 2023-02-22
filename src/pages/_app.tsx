import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
