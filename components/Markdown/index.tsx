import * as React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MarkdownListItem from "./MarkdownListItem";
import CodeCustom from "./CodeCustom";

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "h4",
                component: "h1",
                align: "center",
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: "h5", component: "h2" },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: "h6", component: "h3" },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "caption",
                paragraph: true,
            },
        },
        p: {
            component: Typography,
            props: { paragraph: true, variant: "body2" },
        },
        a: {
            component: Link,
            props: {
                underline: "hover",
                rel: "noreferrer",
                target: "_blank",
            },
        },
        li: {
            component: MarkdownListItem,
        },
        pre: {
            component: React.Fragment,
        },
        code: {
            component: CodeCustom,
        },
    },
};

export default function Markdown(props: any) {
    return <ReactMarkdown options={options} {...props} />;
}
