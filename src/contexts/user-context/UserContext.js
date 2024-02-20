import { createContext } from "react";

const UserContext = createContext();
export default UserContext;

return (
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
);
