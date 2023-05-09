import { recipeObjectMapper } from '../mappers/RecipeMapper';

export const foodRecipeCall = async (name: string) => {
	try {
		const res = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${
				import.meta.env.VITE_APP_ID
			}&app_key=${import.meta.env.VITE_APP_KEY}`
		);
		const data = await res.json();

		if (res.ok) {
			const filterRecipes = {
				count: data.count,
				from: data.from,
				to: data.to,
				next: data['_links']?.next?.href,
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

export const latestRecipeCall = async (randomName: string) => {
	try {
		const res = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${randomName}&app_id=${
				import.meta.env.VITE_APP_ID
			}&app_key=${import.meta.env.VITE_APP_KEY}&random=true`
		);
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
		return { success: false, message: `Something went wrong, ${err.message}` };
	}
};
