import { useReducer } from 'react';
import { INITIAL_FORM_DATA, formUserReducer } from '../reducers/formUserReducer';

const useFormUser = () => {
	const [formData, dispatchForm] = useReducer(formUserReducer, INITIAL_FORM_DATA);

	const isValidField =
		!formData.author.value ||
		!!formData.author.error ||
		!formData.comment.value ||
		!!formData.comment.error;

	return {
		formData,
		isValidField,
		dispatchForm
	};
};

export default useFormUser;
