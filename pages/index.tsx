import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse App</title>
        <link rel="icon" href="https://www.flaticon.com/svg/vstatic/svg/3917/3917015.svg?token=exp=1656704897~hmac=38f3f94be6926ef3dad67f0e5fa50395" />
      </Head>
      <div >
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Home;
