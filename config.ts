import Config from "~/model/config";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
    wordpress: "https://www.ahdark.com/",
    social: [
        {
            name: "Twitter",
            icon: brands("twitter"),
            href: "https://twitter.com/AHdark_0428",
        },
        {
            name: "Telegram Channel",
            icon: brands("telegram"),
            href: "https://t.me/AHdark_Channel",
        },
        {
            name: "QQ Group",
            icon: brands("qq"),
            href: "https://qm.qq.com/cgi-bin/qm/qr?k=XDOyNPtPKGZUzehqlXCCtav80T5sZtcP&jump_from=webapi",
        },
        {
            name: "GitHub",
            icon: brands("github"),
            href: "https://github.com/AH-dark",
        },
        {
            name: "Email",
            icon: solid("envelope"),
            href: "mailto:ahdark@outlook.com",
        },
    ],
};

export default config;
