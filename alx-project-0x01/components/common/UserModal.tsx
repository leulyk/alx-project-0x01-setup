import { UserModalProps, UserProps } from '@/interfaces';
import React, { useState } from 'react';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserProps>({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: '',
            },
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setUser((prevUsers) => ({ ...prevUsers, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className='bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-900'>
            <div className='max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg bg-white p-8 shadow-lg'>
                <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Add New User
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label
                            htmlFor='name'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter full name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='username'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Username
                        </label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={user.username}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter username'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='phone'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Phone Number
                        </label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            value={user.phone}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter phone number'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='website'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Website
                        </label>
                        <input
                            type='text'
                            id='website'
                            name='website'
                            value={user.website}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter website'
                        />
                    </div>
                    <div>
                        Address
                        <div className='flex gap-3'>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='street'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Street
                                </label>
                                <input
                                    type='text'
                                    id='street'
                                    name='street'
                                    value={user.address.street}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter street'
                                />
                            </div>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='suite'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Suite
                                </label>
                                <input
                                    type='text'
                                    id='suite'
                                    name='suite'
                                    value={user.address.suite}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter suite'
                                />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='city'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    City
                                </label>
                                <input
                                    type='text'
                                    id='city'
                                    name='city'
                                    value={user.address.city}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter city'
                                />
                            </div>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='zipcode'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Zipcode
                                </label>
                                <input
                                    type='text'
                                    id='zipcode'
                                    name='zipcode'
                                    value={user.address.zipcode}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter zipcode'
                                />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='lat'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Latitude
                                </label>
                                <input
                                    type='text'
                                    id='lat'
                                    name='lat'
                                    value={user.address.geo.lat}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter latitude coordinate'
                                />
                            </div>
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='lng'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Longitude
                                </label>
                                <input
                                    type='text'
                                    id='lng'
                                    name='lng'
                                    value={user.address.geo.lng}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter longitude coordinate'
                                />
                            </div>
                        </div>
                        <div>
                            Company
                            <div className='mb-4 w-full'>
                                <label
                                    htmlFor='companyName'
                                    className='mb-2 block font-medium text-gray-700'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='companyName'
                                    name='companyName'
                                    value={user.company.name}
                                    onChange={handleChange}
                                    className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter company name'
                                />
                            </div>
                            <div className='flex gap-3'>
                                <div className='mb-4 w-full'>
                                    <label
                                        htmlFor='catchPhrase'
                                        className='mb-2 block font-medium text-gray-700'
                                    >
                                        Catchphrase
                                    </label>
                                    <input
                                        type='text'
                                        id='catchPhrase'
                                        name='catchPhrase'
                                        value={user.company.catchPhrase}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                        placeholder='Enter catchphrase'
                                    />
                                </div>
                                <div className='mb-4 w-full'>
                                    <label
                                        htmlFor='bs'
                                        className='mb-2 block font-medium text-gray-700'
                                    >
                                        Business
                                    </label>
                                    <input
                                        type='text'
                                        id='bs'
                                        name='bs'
                                        value={user.company.bs}
                                        onChange={handleChange}
                                        className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                        placeholder='Enter business'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='rounded-lg bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600'
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
