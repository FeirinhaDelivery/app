import React, {createContext, useState, useContext} from 'react';

const CategoryContext = createContext();

export default function CategoryProvider({children}) {
  const [codCategory, setCodCategory] = useState(51814491);

  return (
    <CategoryContext.Provider value={{codCategory, setCodCategory}}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  const {codCategory, setCodCategory} = context;
  return {codCategory, setCodCategory};
}
