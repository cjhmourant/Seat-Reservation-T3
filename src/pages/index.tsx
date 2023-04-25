import { type NextPage } from "next";
import Head from "next/head";
import * as Layout from "../styles/layoutComponents";
import { signIn, signOut, useSession } from "next-auth/react";

import { SeatMap } from "~/components/SeatMap";
import { api } from "~/utils/api";
import { type ReactElement } from "react";

const Home: NextPage = () => {
  // const seats = api.seat.getAllSeats.useQuery();

  return (
    <>
      <Head>
        <title>Create Seat Booking App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout.Page>
          <Layout.ResBar>
            <div>
              <h1>Seat Booking Sidebar</h1>
              <AuthShowcase />
            </div>
          </Layout.ResBar>
          <Layout.MapArea>
            <SeatMap />
          </Layout.MapArea>
        </Layout.Page>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase = (): ReactElement => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
