export type FormDataType = {
	id_user: string;
	author: { value: string; error: string };
	comment: { value: string; error: string };
};

interface NameAuthor {
	type: 'SET_NAME_AUTHOR';
	payload: string;
}

interface CommentAuthor {
	type: 'SET_COMMENT_AUTHOR';
	payload: string;
}

interface ResetFormData {
	type: 'RESET_FORM_AUTHOR';
}

export type FormReducerAction = NameAuthor | CommentAuthor | ResetFormData;
