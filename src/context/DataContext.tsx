"use client";

import { IProject } from "@/models/project";
import { createContext, useContext, useState } from "react";

export type DataType = {
  data: IProject[];
  setData: React.Dispatch<React.SetStateAction<IProject[]>>;
};

export const dataContext = createContext({} as DataType);

import React from "react";

const DataContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState([] as IProject[]);
  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export function useDataContext() {
  return useContext(dataContext);
}

export default DataContext;
