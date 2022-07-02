import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
