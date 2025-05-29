import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import Header from '@/components/layout/Header';
import { UserData, UserProps } from '@/interfaces';
import { useState } from 'react';

interface UsersPageProps {
    posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddPost = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
    };

    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <main className='p-4'>
                <div className='mx-6 flex justify-between'>
                    <h1 className='text-2xl font-semibold'>Manage Users</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='rounded-full bg-blue-700 px-4 py-2 text-white'
                    >
                        Add User
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    {posts.map(
                        (
                            {
                                id,
                                name,
                                username,
                                email,
                                address,
                                phone,
                                website,
                                company,
                            }: UserProps,
                            key: number,
                        ) => (
                            <UserCard
                                name={name}
                                username={username}
                                email={email}
                                address={address}
                                phone={phone}
                                website={website}
                                company={company}
                                id={id}
                                key={key}
                            />
                        ),
                    )}
                </div>
            </main>
            {isModalOpen && (
                <UserModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: {
            posts: users,
        },
    };
}

export default Users;
