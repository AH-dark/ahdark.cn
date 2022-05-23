import React, { useEffect, useMemo, useRef } from "react";
import hljs from "highlight.js";
import { Box } from "@mui/material";
import "highlight.js/styles/github-dark-dimmed.css";
import "@fontsource/jetbrains-mono";

const CodeCustom: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
    const classNames = (props.className || "").split(" ");
    const language: string | null = useMemo(() => {
        const prefix = "lang-";
        for (let className of classNames) {
            if (className.startsWith(prefix)) {
                return className.slice(prefix.length);
            }
        }
        return null;
    }, [classNames]);

    const element = useRef<HTMLElement>();

    useEffect(() => {
        if (typeof element.current !== "undefined") {
            const languages: string[] = [];
            if (language !== null) {
                languages.push(language);
            }

            hljs.configure({
                languages: languages,
            });
            hljs.highlightElement(element.current);
        }
    }, [language, props.children]);

    return (
        <Box
            component={"pre"}
            className={[
                ...(props.className?.split(" ") || []),
                language && "language-" + language,
            ].join(" ")}
            overflow={"visible"}
            position={"relative"}
            fontSize={13.5}
            my={2}
            sx={{
                tabSize: 4,
                "& :before": {
                    content: `""`,
                    position: "absolute",
                    background:
                        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDU0IDE0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI2IiBmaWxsPSIjRkY1RjU2IiBzdHJva2U9IiNFMDQ0M0UiIHN0cm9rZS13aWR0aD0iLjUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI2IiBjeT0iNiIgcj0iNiIgZmlsbD0iI0ZGQkQyRSIgc3Ryb2tlPSIjREVBMTIzIiBzdHJva2Utd2lkdGg9Ii41Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI0NiIgY3k9IjYiIHI9IjYiIGZpbGw9IiMyN0M5M0YiIHN0cm9rZT0iIzFBQUIyOSIgc3Ryb2tlLXdpZHRoPSIuNSI+PC9jaXJjbGU+PC9nPjwvc3ZnPg==) no-repeat",
                    backgroundPositionY: "center",
                    top: 22,
                    left: 20,
                    height: 14,
                    width: 54,
                    ml: 0.5,
                    display: "block",
                },
            }}
        >
            <Box
                component={"code"}
                {...props}
                ref={element}
                sx={{
                    display: "block",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    lineHeight: 1.5,
                    fontSize: 16,
                    borderRadius: 2,
                    boxShadow: "rgba(0,0,0,.2)0 5px 20px",
                    padding: "55px 20px 22px!important",
                    letterSpacing: 1.2,
                }}
                fontFamily={[
                    "JetBrains Mono",
                    "SFMono-Regular",
                    "Consolas",
                    "Noto Sans SC",
                    "monospace",
                ].join(",")}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default CodeCustom;
