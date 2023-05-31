import { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createComment } from '../../lib/api/comments';
import useFormUser from '../../lib/hooks/useFormUser';
import { FormDataType, FormReducerAction } from '../../types/userFormTypes';
import { ArticleComments } from './BlogDetails';

type FormCommentProps = {
	url?: string;
	comments: ArticleComments[];
	setComments: Dispatch<SetStateAction<ArticleComments[]>>;
};

const FormComment = ({ url, comments, setComments }: FormCommentProps) => {
	const { formData, isValidField, dispatchForm } = useFormUser();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	return (
		<form className='my-6 flex flex-col items-start gap-12'>
			<div className='relative flex w-full flex-col font-inter'>
				<input
					id='name'
					value={formData.author.value}
					onChange={evt => dispatchForm({ type: 'SET_NAME_AUTHOR', payload: evt.target.value })}
					type='text'
					className={`peer rounded-lg border-b-2 px-3 py-1 tracking-wide placeholder-transparent outline-none transition-all ${
						!!formData.author.error
							? 'border-b-red/60 focus:border-b-red'
							: 'border-b-orange/60 focus:border-b-orange'
					}`}
					placeholder='name'
				/>
				{!!formData.author.error && (
					<span className='absolute -bottom-5 text-sm italic text-red'>
						{formData.author.error}
					</span>
				)}
				<label
					htmlFor='name'
					className='absolute -top-5 left-0 text-[15px] font-semibold text-black transition-all duration-500 peer-placeholder-shown:left-3 peer-placeholder-shown:top-[6px] peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-gray'
				>
					Name*
				</label>
			</div>
			<div className='relative flex w-full flex-col font-inter'>
				<textarea
					id='comment'
					value={formData.comment.value}
					onChange={evt => dispatchForm({ type: 'SET_COMMENT_AUTHOR', payload: evt.target.value })}
					cols={20}
					rows={3}
					className={`peer resize-none rounded-lg border-b-2 px-3 py-2 placeholder-transparent outline-none transition-all ${
						!!formData.comment.error
							? 'border-b-red/60 focus:border-b-red'
							: 'border-b-orange/60 focus:border-b-orange'
					}`}
					placeholder='Comment'
				></textarea>
				{!!formData.comment.error && (
					<span className='absolute -bottom-5 text-sm italic text-red'>
						{formData.comment.error}
					</span>
				)}
				<label
					htmlFor='comment'
					className='absolute -top-5 left-0 text-[15px] font-semibold text-black transition-all duration-500 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-gray'
				>
					Comment*
				</label>
				{!!message && (
					<span className='absolute -bottom-7 font-semibold italic text-green'>{message}</span>
				)}
			</div>
			<button
				disabled={loading || isValidField}
				onClick={evt => {
					evt.preventDefault();
					updateArticleComment(
						formData,
						setLoading,
						setMessage,
						dispatchForm,
						comments,
						setComments,
						url
					);
				}}
				className='rounded-lg bg-orange px-2 py-1 font-inter text-sm tracking-wide text-white transition-all duration-500 disabled:opacity-60'
			>
				Post Comment
			</button>
		</form>
	);
};

// TODO: many arguments?
const updateArticleComment = async (
	formCommentUser: FormDataType,
	serLoading: Dispatch<SetStateAction<boolean>>,
	setMessage: Dispatch<SetStateAction<string>>,
	dispatchForm: Dispatch<FormReducerAction>,
	comments: ArticleComments[],
	setComments: Dispatch<SetStateAction<ArticleComments[]>>,
	url?: string
) => {
	serLoading(true);

	const addUuidv4 = {
		id_user: uuidv4(),
		author: formCommentUser.author.value,
		comment: formCommentUser.comment.value
	};

	const { error, success } = await createComment(addUuidv4, url);
	if (success) {
		setTimeout(() => {
			setMessage('thanks for your comment');
			serLoading(false);
			dispatchForm({ type: 'RESET_FORM_AUTHOR' });
			setComments([...comments, addUuidv4]);
		}, 900);
	}
	if (error) {
		setMessage(error);
		serLoading(false);
	}
	setTimeout(() => {
		setMessage('');
	}, 4000);
};

export default FormComment;
