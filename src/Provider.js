import PackageContext from "./Context";
import { useState } from "react";

const Provider = ({ children }) => {
  let [cricketer, setCricketer] = useState({
    name: "Sachin tendulkar",
    age: 50,
    country: "India",
    highestScore: 248,
  });
  return (
    <PackageContext.Provider
      value={{
        data: cricketer,
        updateAge: (newAge) => setCricketer({ ...cricketer, age: newAge }),
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export default Provider;
