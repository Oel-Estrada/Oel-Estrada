declare interface ImportMetaEnv {
    readonly VITE_APP_ENV?: string;
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}