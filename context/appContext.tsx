import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextProps {
  textColor: string;
  cursorText: string;
  outerScale: number;
  setAppTextColor: Dispatch<SetStateAction<string>>;
  setAppCursorText: Dispatch<SetStateAction<string>>;
  setOuterScale: Dispatch<SetStateAction<number>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [textColor, setTextColor] = useState("");
  const [cursorText, setCursorText] = useState("");
  const [outerScale, setOuterScale] = useState(5);

  const setAppTextColor: AppContextProps["setAppTextColor"] = (color) => {
    setTextColor(color);
  };

  const setAppCursorText: AppContextProps["setAppCursorText"] = (text) => {
    setCursorText(text);
  };

  const contextValues: AppContextProps = {
    textColor,
    cursorText,
    outerScale,
    setAppTextColor,
    setAppCursorText,
    setOuterScale,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  return context || ({} as AppContextProps);
};

export { AppProvider, useAppContext };
