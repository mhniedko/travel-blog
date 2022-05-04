import {createClient} from 'next-sanity';
import {config} from './config'
import {process} from "next/dist/server/web/sandbox/polyfills";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient;