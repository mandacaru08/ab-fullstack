import { createContext, useState } from "react";

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentInfos, setPaymentInfos] = useState({
    cardNumber: null,
    cardName: null,
    cardExpiration: null,
    cardCVV: null,
  });

  const updatePaymentInfos = (paymentField, fieldValue) => {
    setPaymentInfos((prevPaymentInfos) => ({
      ...prevPaymentInfos,
      [paymentField]: fieldValue,
    }));
  };

  return (
    <PaymentContext.Provider value={{ paymentInfos, updatePaymentInfos }}>
      {children}
    </PaymentContext.Provider>
  );
}
