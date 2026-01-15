const RAW_ENV = import.meta.env.VITE_APP_ENV as string;

export const ENVIRONMENTS = {
    DEV: 'dev',
    PROD: 'prod',

    get current(): string {
        return RAW_ENV.toLowerCase().trim() || this.PROD;
    },

    get isDev(): boolean {
        return this.current === this.DEV;
    },

    get isProd(): boolean {
        return this.current === this.PROD;
    },
};