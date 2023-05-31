export const allComments = async (id?: string) => {
	const response = await fetch(`https://www.jpomadev97.com/api/articles/${id}`);
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
		const response = await fetch(`https://www.jpomadev97.com/api/articles/${urlParam}`, {
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
