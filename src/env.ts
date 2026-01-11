const RAW_ENV = import.meta.env.VITE_APP_ENV as string;
export const ENV_NORMALIZED = RAW_ENV.toLowerCase().trim() || 'prod';

export const isDev = ENV_NORMALIZED === 'dev';
export const isProd = ENV_NORMALIZED === 'prod';

export default {
    isDev,
    isProd,
};