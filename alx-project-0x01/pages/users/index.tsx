import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'

interface UsersPageProps {
    users: UserProps[]
}

const User: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <main className='p-4'>
                <div className='mx-6 flex justify-between'>
                    <h1 className='text-2xl font-semibold'>Manage Users</h1>
                    <button className='rounded-full bg-blue-700 px-4 py-2 text-white'>
                        Add User
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    {users?.map(
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
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {
            users,
        },
    }
}

export default User
