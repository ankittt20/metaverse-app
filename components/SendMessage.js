import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({endOfMessagesRef}) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl rounded-full shadow-xl border-2 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5"
        type="text"
        placeholder={`Send a message ${user.getUsername()}.....`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="text-bold text-pink-500 "
      >
        Send!
      </button>
    </form>
  );
};

export default SendMessage;
