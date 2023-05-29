import { ArticleComments } from './BlogDetails';

const BlogCommentRow = ({ author, comment, id_user }: ArticleComments) => {
	return (
		<li className=''>
			<div className='font-inter text-base font-semibold italic text-orange'>{author}</div>
			<div className='font-inter text-[15px]'>{comment}</div>
		</li>
	);
};
export default BlogCommentRow;
