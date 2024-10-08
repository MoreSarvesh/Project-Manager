import React from "react";

const Popup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
      {children}
    </div>
  );
};

export default Popup;
