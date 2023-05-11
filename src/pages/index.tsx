import { type NextPage } from "next";
import Head from "next/head";
import * as Layout from "../components/LayoutStyles";
import { useSession } from "next-auth/react";
import { SeatMap } from "~/components/SeatMap";
import { SeatContextProvider } from "~/utils/contextHooks/useSeatContext";
import { SignIn } from "~/components/SignIn";
import { ResBar } from "~/components/ResBar";
import { DateContextProvider } from "~/utils/contextHooks/useDateContext";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>Go Seaty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {sessionData ? (
          <Layout.Page>
            <SeatContextProvider>
              <DateContextProvider>
                <Layout.ResBar>
                  <ResBar />
                </Layout.ResBar>
                <Layout.MapArea>
                  <SeatMap />
                </Layout.MapArea>
              </DateContextProvider>
            </SeatContextProvider>
          </Layout.Page>
        ) : (
          <SignIn />
        )}
      </main>
    </>
  );
};

export default Home;
