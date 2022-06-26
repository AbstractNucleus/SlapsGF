import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PlausibleProvider from "next-plausible"
import Layout from "../components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PlausibleProvider domain="noelkleen.com" trackOutboundLinks>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </PlausibleProvider>
  );
}
