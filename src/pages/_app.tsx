import "@/styles/globals.css";

import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { api } from "@/lib/api";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin-ext"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));
