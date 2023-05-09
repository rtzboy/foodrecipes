import { createContext, useContext } from 'react';
import { RecipeListInfoType, RecipeReducerAction } from '../../types/recipeTypes';

type FoodRecipeType = {
	foodRecipes: RecipeListInfoType;
	dispatchRecipes: React.Dispatch<RecipeReducerAction>;
};

export const FoodRecipeContext = createContext<FoodRecipeType>({} as FoodRecipeType);

export const useFoodRecipeContext = () => useContext(FoodRecipeContext);
