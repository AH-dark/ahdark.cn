import cryptoJs from "crypto-js";
import config from "../config";

const Avatar = (email: string, size: number = 80) => {
    const md5 = cryptoJs.MD5(email.trim());

    if (size > 2048) {
        size = 2048;
    }

    const url = new URL(`https://www.gravatar.com/avatar/${md5}?s=${size}`);

    if (
        typeof config.CDN !== "undefined" &&
        typeof config.CDN.gravatar !== "undefined"
    ) {
        url.hostname = config.CDN.gravatar;
    }

    return url.href;
};

export default Avatar;
