import { UserProps } from '@/interfaces';
import UserCardItem from './UserCardItem';

const UserCard: React.FC<UserProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
}) => {
    const { street, suite, city, zipcode, geo } = address;
    const { lat, lng } = geo;
    const { name: companyName, catchPhrase, bs } = company;

    return (
        <div className='mx-auto my-6 max-w-xl rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
            <div className='mb-4 rounded-lg bg-blue-400 p-4'>
                <div className='mt-4 flex items-center justify-between text-sm text-gray-500'>
                    <h2 className='text-2xl font-semibold text-gray-800'>
                        {name}
                    </h2>
                    <h3 className='text-xl font-semibold text-gray-600'>
                        {username}
                    </h3>
                </div>
                <p>ID: {id}</p>
            </div>
            <div className='p-6 pl-2'>
                <UserCardItem
                    title='Email'
                    value={email}
                    link={`mailto:${email}`}
                />
                <UserCardItem
                    title='Phone'
                    value={phone}
                    link={`tel:${phone}`}
                />
                <UserCardItem
                    title='Website'
                    value={website}
                    link={`https://${website}`}
                />
                <UserCardItem
                    title='Address'
                    value={`${street}, ${suite}, ${city}`}
                />
                <UserCardItem title='Zip Code' value={zipcode} />
                <UserCardItem
                    title='Coordinates'
                    value={`lat: ${lat}, lng: ${lng}`}
                />
                <UserCardItem
                    title='Company'
                    value={`${companyName}, ${catchPhrase}, ${bs}`}
                />
            </div>
        </div>
    );
};

export default UserCard;
