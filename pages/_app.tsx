import TinaProvider from "@/.tina/components/TinaDynamicProvider";
import Layout from "@/components/Layout";

import "../styles/reset.css";
import "../styles/fonts.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TinaProvider>
  );
}

App;
