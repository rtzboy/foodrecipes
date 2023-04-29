import { recipeObjectMapper } from '../mappers/RecipeMapper';

const url = `https://api.edamam.com/api/recipes/v2?type=public&q=meat&app_id=8a89949d&app_key=${
	import.meta.env.VITE_APP_KEY
}&random=true`;

export const randomRecipeCall = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			const filterData = data.hits.map((item: any) => ({
				label: item.recipe.label,
				image: item.recipe.image,
				ingredientLines: item.recipe.ingredientLines
			}));

			const recipeDay = filterData[Math.floor(Math.random() * (19 - 0 - 1) + 0)];
			return { success: true, message: res.statusText, recipeDay };
		}
		return { success: false, message: res.statusText };
	} catch (err: any) {
		console.log(err);
		return { success: false, message: err.message };
	}
};

export const foodRecipeCall = async (name: string) => {
	try {
		const res = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=8a89949d&app_key=${
				import.meta.env.VITE_APP_KEY
			}`
		);
		const data = await res.json();

		if (res.ok) {
			const filterRecipes = {
				count: data.count,
				from: data.from,
				to: data.to,
				next: data['_links'].next.href,
				recipe: data.hits.map((item: any) => recipeObjectMapper(item.recipe))
			};

			return { success: true, message: res.statusText, filterRecipes };
		}
		return { success: false, message: res.statusText };
	} catch (err: any) {
		console.log(err);
		return { success: false, message: err.message };
	}
};

export const nextRecipeCall = async (url: string) => {
	try {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			const filterRecipes = {
				count: data.count,
				from: data.from,
				to: data.to,
				next: data['_links'].next?.href,
				recipe: data.hits.map((item: any) => recipeObjectMapper(item.recipe))
			};
			return { success: true, message: res.statusText, filterRecipes };
		}
		return { success: false, message: res.statusText };
	} catch (err: any) {
		console.log(err);
		return { success: false, message: err.message };
	}
};
