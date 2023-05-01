import { createContext, useContext } from 'react';

type CategoryContextType = {
	categories: string;
	setCategories: React.Dispatch<React.SetStateAction<'all' | string>>;
};

export const CategoryContext = createContext({} as CategoryContextType);

export const useCategoryContext = () => useContext(CategoryContext);
