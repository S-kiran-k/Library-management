import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex flex-wrap items-center justify-between bg-slate-400 bg-4'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <span className='text-4xl font-semibold text-white p-10 tracking-tight'>Library Management System</span>
            </div>
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white' onClick={() => alert('Menu button clicked')}>
                    <svg className='w-3 h-3 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div className='flex-grow block w-full lg:flex lg:items-center  lg:w-auto'>
                <div className='text-sm lg:flex-grow'>
                    <ul className='flex text-xl justify-end'>
                        <li className='mr-3'>
                            <Link to="/" className='block mt-4 mr-4 text-teal-200  lg:inline-block lg:mt-0 hover:text-white'>Home</Link>
                        </li>
                       
                        <li>
                            <Link to="/library" className='block mt-4 mr-5 text-teal-200 lg:inline-block lg:mt-0 hover:text-white'>Library</Link>
                        </li>
                        <li className='mr-3'>
                            <Link to="/login" className='block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white'>Login</Link>
                        </li>
                        <li>
                            <Link to="/signup" className='block mt-4 mr-5 text-teal-200 lg:inline-block lg:mt-0 hover:text-white'>Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
