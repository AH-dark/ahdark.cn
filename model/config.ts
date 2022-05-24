export default interface Config {
    siteName: string;
    owner: {
        name: string;
        email: string;
        description: string;
    };
    SEO: {
        description: string;
    };
    CDN?: {
        gravatar?: string;
    };
    matomo?: {
        url: string;
        siteId: string;
        jsTrackerFile?: string;
        phpTrackerFile?: string;
        excludeUrlsPatterns?: RegExp[];
    };
    wordpress: string;
}
