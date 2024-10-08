"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type PopupContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isAddTaskOpen: boolean;
  setIsAddTaskOpen: Dispatch<SetStateAction<boolean>>;
  isDeleteProjectkOpen: boolean;
  setIsDeleteProjectkOpen: Dispatch<SetStateAction<boolean>>;
};

export const popupContext = createContext({} as PopupContextType);

const PopupContext = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isDeleteProjectkOpen, setIsDeleteProjectkOpen] = useState(false);
  return (
    <popupContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isAddTaskOpen,
        setIsAddTaskOpen,
        isDeleteProjectkOpen,
        setIsDeleteProjectkOpen,
      }}
    >
      {children}
    </popupContext.Provider>
  );
};

export function usePopupContext() {
  return useContext(popupContext);
}

export default PopupContext;
