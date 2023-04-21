import { NavLink, NavLinkProps } from 'react-router-dom';

type LinkToProps = {
	active?: string;
	children?: React.ReactNode;
} & NavLinkProps;

const LinkTo = ({ to, active, className, children, ...rest }: LinkToProps) => {
	const activeClass = `${active || ''} ${className}`;
	const styleClass = `${className || ''}`;

	return (
		<NavLink {...rest} to={to} className={({ isActive }) => (isActive ? activeClass : styleClass)}>
			{children}
		</NavLink>
	);
};

export default LinkTo;
