export const allComments = async (id?: string) => {
	// https://recipebacktest.onrender.com/articles/fe70b778-4b13-4b8c-8afe-7281d957e911
	const response = await fetch(`https://recipebacktest.onrender.com/articles/${id}`);
	try {
		if (response.ok) {
			const data = await response.json();
			return { success: data.success, comments: data.comments };
		}
		return { success: false, error: 'Not articles found!' };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
};

export const createComment = async (
	formCommentUser: UserCommentType,
	urlParam?: string
): Promise<CreateCommentType> => {
	try {
		const response = await fetch(`https://recipebacktest.onrender.com/articles/${urlParam}`, {
			headers: { 'Content-Type': 'application/json' },
			method: 'PATCH',
			body: JSON.stringify(formCommentUser)
		});
		const data = await response.json();
		return { success: data.success, error: data.error };
	} catch (error: any) {
		return { success: false, error: error.message };
	}
};

type CreateCommentType = { success: boolean; error: string };
type UserCommentType = { id_user: string; author: string; comment: string };
