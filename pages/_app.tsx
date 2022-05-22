import type { AppProps } from "next/app";
import wrapper from "../redux/wrapper";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { useAppSelector } from "../redux/hooks";
import React, { useEffect } from "react";
import Head from "next/head";
import config from "../config";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
}

const theme = createTheme();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const title = useAppSelector((state) => state.viewUpdate.title);

    useEffect(() => {
        window.document.title =
            title !== null ? `${title} - ${config.siteName}` : config.siteName;
    }, [title]);

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <Head>
                <title>
                    {title !== null
                        ? `${title} - ${config.siteName}`
                        : config.siteName}
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <meta name="description" content={config.SEO.description} />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default wrapper.withRedux(App);
