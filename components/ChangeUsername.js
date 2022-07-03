import React from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt("Enter New Username...");

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-10">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="px-3 py-2 bg-fuchsia-900 rounded-md text-pink-200 hover:text-white"
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeUsername;
