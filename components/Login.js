import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div>
      <Head>
        <title>Login</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/svg/vstatic/svg/3917/3917015.svg?token=exp=1656704897~hmac=38f3f94be6926ef3dad67f0e5fa50395"
        />
      </Head>

      <div className="relative">
        <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4">
          <Image
            className="object-cover rounded-full"
            src="https://designoholic.com/wp-content/uploads/2017/07/avatar-colored-d.png"
            height={250}
            width={250}
          />
          <button
            onClick={authenticate}
            className="bg-yellow-300 rounded-lg px-5 py-3 font-bold animate-pulse"
          >
            Login to Metaverse!
          </button>
        </div>
        <div className="w-full h-screen">
          <Image
            src="https://links.papareact.com/55n"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
