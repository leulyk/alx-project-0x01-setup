import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className='bg-blue-600 py-4 text-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between px-4'>
                <h3 className='text-2xl font-bold'>
                    <Link href='/'>Daily Contents</Link>
                </h3>
                <nav>
                    <ul className='flex space-x-6'>
                        <li className='hover:underline'>
                            <Link href='/posts'>Posts</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link href='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
