import { getGithubUser, ReturnedUser } from "@/utils"
import { FC, useState } from "react"
import type { GetStaticProps } from "next"

export const Home: FC<{ initUser: ReturnedUser }> = ({ initUser }) => {
    const [user, setUser] = useState<ReturnedUser>(initUser)

    const handleClick = async () => {
        const me = await getGithubUser("nrademacher")
        setUser(me)
    }

    return (
        <ul onClick={handleClick} className="grid min-h-screen text-gray-900 place-items-center">
            <li>
                <img src={user?.avatar_url} alt="avatar" className="rounded-full" />
            </li>
            <li>{user?.name}</li>
            <li>{user?.login}</li>
            <li>{user?.created_at}</li>
            <li>{user?.bio}</li>
            <li>{user?.public_repos}</li>
            <li>{user?.followers}</li>
            <li>{user?.following}</li>
            <li>{user?.location}</li>
            <li>{user?.blog}</li>
            <li>{user?.twitter_username}</li>
            <li>{user?.company}</li>
        </ul>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const octocatUser = await getGithubUser("octocat")

    return {
        props: {
            initUser: JSON.parse(JSON.stringify(octocatUser)),
        },
    }
}

export default Home
