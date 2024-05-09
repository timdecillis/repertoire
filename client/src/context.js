import { createContext, useState } from "react";


export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [dupe, setDupe] = useState(false);

  return (
    <DataContext.Provider value={{ dupe, setDupe, songs, setSongs, user, setUser, password, setPassword }}>
      {children}
    </DataContext.Provider>
  );
};