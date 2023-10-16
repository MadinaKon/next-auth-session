import Main_Layout from "@/components/layouts/Main_Layout";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Main_Layout>
        <Component {...pageProps} />
      </Main_Layout>
    </SessionProvider>
  );
}
