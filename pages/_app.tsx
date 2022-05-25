import type { AppProps } from "next/app";
import wrapper from "~/redux/wrapper";
import { CacheProvider } from "@emotion/react";
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { useAppSelector } from "~/redux/hooks";
import React, { useEffect } from "react";
import Head from "next/head";
import config from "~/config";
import { SnackbarProvider } from "notistack";
import * as Matomo from "@socialgouv/matomo-next";
import "@fontsource/roboto";
import "@fontsource/noto-sans-sc";
import avatar from "~/source/images/avatar.png";
import favicon from "~/source/images/favicon.png";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
}

const fontFamily = [
    "Roboto",
    "Helvetica",
    "Arial",
    "Noto Sans SC",
    "sans-serif",
    "Noto Emoji",
].join(",");

const theme = createTheme({
    typography: {},
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        if (typeof config.matomo !== "undefined") {
            Matomo.init(config.matomo);
        }
    }, []);

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
                <meta name={"description"} content={config.SEO.description} />
                <link rel={"icon"} href={favicon.src} type={"image/png"} />
                <meta property={"og:type"} content={"website"} />
                <meta property={"og:locale"} content={"zh_CN"} />
                <meta property={"og:image"} content={avatar.src} />
                <meta property={"og:site_name"} content={config.siteName} />
                <meta
                    property={"og:description"}
                    content={config.SEO.description}
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyles
                    styles={{
                        ":root": {
                            fontFamily: fontFamily,
                        },
                    }}
                />
                <SnackbarProvider
                    anchorOrigin={{
                        horizontal: "right",
                        vertical: "top",
                    }}
                >
                    <Component {...pageProps} />
                </SnackbarProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default wrapper.withRedux(App);
