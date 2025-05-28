import { UserProps } from "@/interfaces"

const UserCard: React.FC<UserProps> = () => {
    return (<></>)
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default UserCard
