import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <GlobalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
