import { createContext } from "react";

const GlobalContext = createContext({
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export default GlobalContext;
