import React, { useState } from "react";
import { createContext } from "react";

export const UserInfoContext = createContext(null);

export default function UserInfoProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <UserInfoContext.Provider
      value={{ email, setEmail, password, setPassword }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
