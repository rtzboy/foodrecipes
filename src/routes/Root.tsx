import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
	return (
		<div className='mx-auto flex min-h-screen max-w-7xl flex-col'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
