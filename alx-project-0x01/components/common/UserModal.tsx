import { UserData, UserModalProps } from '@/interfaces';
import React, { useState } from 'react';

const PostModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
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
            <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg'>
                <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Add New User
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* <div className='mb-4'>
                        <label
                            htmlFor='userId'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            User ID
                        </label>
                        <input
                            type='number'
                            id='userId'
                            name='userId'
                            value={post.userId}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='title'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={post.title}
                            onChange={handleChange}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter post title'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='body'
                            className='mb-2 block font-medium text-gray-700'
                        >
                            Body
                        </label>
                        <textarea
                            id='body'
                            name='body'
                            value={post.body}
                            onChange={handleChange}
                            rows={4}
                            className='w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            placeholder='Enter post content'
                        />
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
                            Add Post
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default PostModal;
