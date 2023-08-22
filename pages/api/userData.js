import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  // Define functions to manipulate the data
  const saveData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, saveData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);