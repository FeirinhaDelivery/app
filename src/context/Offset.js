import React, {createContext, useState, useContext} from 'react';

const OffsetContext = createContext();

export default function OffsetProvider({children}) {
  const [offset, setOffset] = useState(0);

  return (
    <OffsetContext.Provider value={{offset, setOffset}}>
      {children}
    </OffsetContext.Provider>
  );
}

export function useOffset() {
  const context = useContext(OffsetContext);
  const {offset, setOffset} = context;
  return {offset, setOffset};
}
