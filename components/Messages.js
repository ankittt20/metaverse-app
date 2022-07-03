import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message";

const MINS_DURATION = 60;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MINS_DURATION * 1000 * 60)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-200 mt-5">
        {/* <p>You're up to date {user.getUsername()}!</p> */}
      </div>
    </div>
  );
};

export default Messages;
