import Message from '../icons/Message';
import BlogCommentRow from './BlogCommentRow';
import { ArticleComments } from './BlogDetails';

type BlogCommentsProps = {
	comments: ArticleComments[];
};

const BlogComments = ({ comments }: BlogCommentsProps) => {
	if (!comments.length)
		return (
			<div className='flex flex-col items-center gap-1 font-inter text-sm italic text-gray'>
				<span>
					<Message className='h-12' />
				</span>
				<span>Be the first to comment.</span>
			</div>
		);

	return (
		<div className='w-full'>
			<ul className='flex flex-col gap-4'>
				{comments.map(comment => (
					<BlogCommentRow key={comment.id_user} {...comment} />
				))}
			</ul>
		</div>
	);
};

export default BlogComments;
