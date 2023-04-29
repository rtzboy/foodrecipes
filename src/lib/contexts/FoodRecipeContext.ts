import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { RecipeType } from '../../types/recipeTypes';

type FoodRecipeType = {
	foodRecipes?: RecipeType;
	setFoodRecipes: Dispatch<SetStateAction<RecipeType | undefined>>;
};

export const FoodRecipeContext = createContext<FoodRecipeType>({} as FoodRecipeType);

export const useFoodRecipeContext = () => useContext(FoodRecipeContext);
