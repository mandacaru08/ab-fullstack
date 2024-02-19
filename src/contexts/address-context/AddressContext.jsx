import { createContext, useState } from "react";

const AddressContext = createContext();
export default AddressContext;

export function AddressProvider({ children }) {
  const [address, setAddress] = useState({
    email: "",
    street: "",
    cep: "",
    city: "",
    country: "",
    state: "",
    complement: "",
    phone: "",
  });

  const updateAddress = (addressField, fieldValue) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [addressField]: fieldValue,
    }));
  };

  return (
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
