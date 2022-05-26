import Config from "~/model/config";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const config: Config = {
    siteName: "AHdark's Profile",
    owner: {
        name: "AHdark",
        email: "ahdark@outlook.com",
        description: "I have poor ability.",
    },
    SEO: {
        description:
            "这是 AHdark 的个人主页，向您详细介绍关于 AHdark 的相关信息、学习与生活。",
    },
    CDN: {
        gravatar: "avatar.sourcegcdn.com",
    },
    matomo: {
        url: "https://stat.ahdark.com",
        siteId: "18",
    },
    wordpress: "https://ahdark.com/",
    social: [
        {
            name: "Twitter",
            icon: faTwitter,
            href: "https://twitter.com/AHdark_0428",
        },
        {
            name: "Telegram",
            icon: faTelegram,
            href: "https://t.me/AH_dark",
        },
    ],
};

export default config;
