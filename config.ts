import Config from "~/model/config";

const config: Config = {
    siteName: "AHdark's Profile",
    owner: {
        name: "AHdark",
        email: "ahdark@outlook.com",
        description: "废物小蒟蒻",
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
};

export default config;
