import { UserCardItemProps } from '@/interfaces';

const UserCardItem: React.FC<UserCardItemProps> = ({ title, value, link }) => {
    return (
        <>
            <div className='font-bold'>{title}: </div>
            {link ? <a href={link}>{value}</a> : value}
            <hr className='mb-2' />
        </>
    );
};

export default UserCardItem;
