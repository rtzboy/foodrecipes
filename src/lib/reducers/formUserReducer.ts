import { validateComment, validateName } from '../../helpers/validations';
import { FormDataType, FormReducerAction } from '../../types/userFormTypes';

export const INITIAL_FORM_DATA = {
	id_user: '',
	author: { value: '', error: '' },
	comment: { value: '', error: '' }
};

export const formUserReducer = (state: FormDataType, action: FormReducerAction) => {
	switch (action.type) {
		case 'SET_NAME_AUTHOR': {
			const errorChecked = validateName(action.payload);
			return { ...state, author: { value: action.payload, error: errorChecked } };
		}
		case 'SET_COMMENT_AUTHOR': {
			const errorChecked = validateComment(action.payload);
			return { ...state, comment: { value: action.payload, error: errorChecked } };
		}
		case 'RESET_FORM_AUTHOR': {
			return INITIAL_FORM_DATA;
		}
	}
};
