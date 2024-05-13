import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [dupe, setDupe] = useState(false);

  return (
    <DataContext.Provider value={{ dupe, setDupe, songs, setSongs, user, setUser, userPassword, setUserPassword }}>
      {children}
    </DataContext.Provider>
  );
};