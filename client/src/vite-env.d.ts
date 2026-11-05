/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  readonly VITE_BING_SITE_VERIFICATION?: string;
  readonly VITE_PRODUCT_HUNT_POST_ID?: string;
  readonly VITE_PRODUCT_HUNT_POST_SLUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
