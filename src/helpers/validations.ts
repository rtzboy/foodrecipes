const validateName = (name: string): string => {
	if (name.length < 4 || name.length > 16) return 'between 4 and 16 characters';
	if (!/^[a-z0-9]+$/.test(name)) return 'only lowercase letters and numbers';
	return '';
};

const validateComment = (comment: string): string => {
	if (comment.length < 5 || comment.length > 150) return 'between 5 and 150 characters';
	return '';
};

export { validateName, validateComment };
