import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
// @ts-ignore
import { GoCityTheme, GoCityGlobalStyle } from "@marco-polo/theme";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { CssVariables } from "~/styles/CssVariables";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <ThemeProvider theme={GoCityTheme}>
        <GoCityGlobalStyle />
        <CssVariables />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
