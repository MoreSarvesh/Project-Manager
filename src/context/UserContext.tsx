"use client";

import { createContext, useContext, useState } from "react";

export type userType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
const userContext = createContext({} as userType);

import React from "react";

const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export function useUserContext() {
  return useContext(userContext);
}
export default UserContext;
