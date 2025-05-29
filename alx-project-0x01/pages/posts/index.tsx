import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces'

interface PostPageProps {
    posts: PostProps[]
}

const Posts: React.FC<PostPageProps> = ({ posts }) => {
    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <main className='p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-semibold'>Post Content</h1>
                    <button className='rounded-full bg-blue-700 px-4 py-2 text-white'>
                        Add Post
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    {posts?.map(
                        (
                            { title, body, userId, id }: PostProps,
                            key: number,
                        ) => (
                            <PostCard
                                title={title}
                                body={body}
                                userId={userId}
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
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return {
        props: {
            posts,
        },
    }
}

export default Posts
