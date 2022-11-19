import { createClient } from "microcms-js-sdk";

export const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});
