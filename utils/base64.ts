import cryptoJs from "crypto-js";

const Base64 = (str: string) => {
    return cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(str));
};

export default Base64;
