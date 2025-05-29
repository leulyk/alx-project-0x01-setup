import { PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
    return (
        <div className='mx-auto my-6 max-w-xl rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl'>
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold text-gray-800'>
                    {title}
                </h2>
            </div>
            <p className='text-gray-600'>{body}</p>
            <div className='mt-4 flex items-center justify-between text-sm text-gray-500'>
                <span>User ID: {userId}</span>
                <span>Post ID: {id}</span>
            </div>
        </div>
    )
}

export default PostCard
