import { RecipeListInfoType, RecipeReducerAction } from '../../types/recipeTypes';

export const INITAL_FOOD_RECIPES = {
	error: false,
	loading: false,
	recipeList: undefined
};

export const recipesReducer = (
	state: RecipeListInfoType,
	action: RecipeReducerAction
): RecipeListInfoType => {
	switch (action.type) {
		case 'RECIPE_SEARCHING':
			return {
				...state,
				error: false,
				loading: true
			};

		case 'RECIPE_FOUND':
			return {
				...state,
				error: false,
				loading: false,
				recipeList: action.payload
			};

		case 'RECIPE_ERROR':
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			throw new Error(`${action} fails!`);
	}
};
