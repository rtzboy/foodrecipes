export type InitialRecipe = {
	label: string;
	image: string;
	ingredientLines: string[];
};

export type RecipeType = {
	count: number;
	from: number;
	to: number;
	next: string | undefined;
	recipe: RecipeDetailsType[];
};

export type RecipeDetailsType = {
	id: string;
	calories: number;
	cuisineType: Array<string>;
	dishType: Array<string>;
	images: {
		large?: { height: number; url: string; width: number };
		regular?: { height: number; url: string; width: number };
		small?: { height: number; url: string; width: number };
	};
	ingredientLines: string[];
	label: string;
	mealType: Array<string>;
	shareAs: string;
	source: string;
	totalTime: number;
	url: string;
	yield: number;
};

export type RecipeListInfoType = {
	error: string | boolean;
	loading: boolean;
	recipeList: RecipeType | undefined;
};

export type RecipeReducerAction = RecipeSearchingAction | RecipeFoundAction | RecipeErrorAction;

interface RecipeSearchingAction {
	type: 'RECIPE_SEARCHING';
}

interface RecipeFoundAction {
	type: 'RECIPE_FOUND';
	payload: RecipeType | undefined;
}

interface RecipeErrorAction {
	type: 'RECIPE_ERROR';
	payload: string;
}
