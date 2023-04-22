import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { InitialRecipe } from '../../types/recipeTypes';

type InitialReducer = {
	randomRecipe?: InitialRecipe;
	setRandomRecipe: Dispatch<SetStateAction<InitialRecipe | undefined>>;
};

export const InitialRecipeContext = createContext<InitialReducer>({} as InitialReducer);

export const useInitialRecipeContext = () => useContext(InitialRecipeContext);
