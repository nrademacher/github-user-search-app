import { FC, useEffect, useState } from "react"
import { getGithubUser, ReturnedUser, toggleColorScheme } from "@/utils"
import { ThemeSwitch, UserProfileItem as ProfileItem, UserSearch, UserStatistic } from "@/components"
import type { GetStaticProps } from "next"

export const Home: FC<{ initUser: ReturnedUser }> = ({ initUser }) => {
    const [theme, setTheme] = useState<"light" | "dark">()

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
            toggleColorScheme("dark")
            setTheme("dark")
        } else {
            toggleColorScheme("light")
            setTheme("light")
        }
    }, [])

    const [user, setUser] = useState<ReturnedUser>(initUser)
    const [userQuery, setUserQuery] = useState<string>("")
    const [noResults, setNoResults] = useState<boolean>(false)

    return (
        <div className="grid min-h-screen place-items-center min-w-screen text-ucla-blue dark:text-white bg-ghost-white dark:bg-dark-jungle-green">
            <main className="w-auto mx-8 md:mx-24 lg:mx-0">
                <header className="flex items-baseline justify-between w-full mb-10">
                    <h2 className="text-black-blue dark:text-white text-h2 font-h2">devfinder</h2>
                    <ThemeSwitch theme={theme} setTheme={setTheme} />
                </header>

                <UserSearch
                    noResults={noResults}
                    userQuery={userQuery}
                    setNoResults={setNoResults}
                    setUserQuery={setUserQuery}
                    setUser={setUser}
                />

                <article className="flex w-full p-8 rounded shadow md:p-16 dark:shadow-none bg-splashed-white dark:bg-medium-jungle-green">
                    {!user ? (
                        <p>No results</p>
                    ) : (
                        <>
                            <div className="hidden w-1/4 lg:block mr-14">
                                <img src={user.avatar_url} alt="avatar" className="rounded-full" />
                            </div>

                            <div className="w-full lg:w-3/4">
                                <section className="flex items-center w-full mb-8 lg:mb-0 lg:block">
                                    <div className="block w-3/5 mr-7 lg:hidden">
                                        <img src={user.avatar_url} alt="avatar" className="rounded-full" />
                                    </div>
                                    <header className="flex flex-col w-full lg:flex-row lg:justify-between lg:items-center">
                                        <h1 className="mb-1 text-charcoal dark:text-white text-h3 md:text-h1 font-h1">
                                            {user.name}
                                        </h1>
                                        <h3 className="mb-2 lg:hidden text-pure-blue">@{user.login}</h3>
                                        <span className="opacity-75 text-h4 md:text-base">
                                            Joined{" "}
                                            {new Date(user.created_at).toUTCString().split(" ").slice(1, 4).join(" ")}
                                        </span>
                                    </header>
                                    <h3 className="hidden lg:block lg:mb-8 text-pure-blue">@{user.login}</h3>
                                </section>

                                <p className="mb-5 md:mb-10 md:text-base text-h4">
                                    {user.bio ?? <span className="opacity-50">This user has no bio</span>}
                                </p>

                                <section className="flex w-full p-6 mb-5 rounded-sm md:mb-10 justify-evenly md:justify-start bg-ghost-white dark:bg-dark-jungle-green">
                                    <UserStatistic statName="Repos" statValue={user.public_repos} />
                                    <UserStatistic statName="Followers" statValue={user.followers} />
                                    <UserStatistic statName="Following" statValue={user.following} />
                                </section>

                                <section className="grid w-full gap-4 text-h4 md:text-base md:grid-cols-2 md:grid-rows-2 md:gap-6">
                                    <ProfileItem
                                        icon="/assets/icon-location.svg"
                                        name="Location"
                                        value={user.location as string}
                                    />
                                    <ProfileItem
                                        icon="/assets/icon-twitter.svg"
                                        name="Twitter"
                                        value={user.twitter_username as string}
                                    />
                                    <ProfileItem
                                        icon="/assets/icon-website.svg"
                                        name="Website"
                                        value={user.blog as string}
                                        isLink
                                    />
                                    <ProfileItem
                                        icon="/assets/icon-company.svg"
                                        name="Company"
                                        value={user.company as string}
                                    />
                                </section>
                            </div>
                        </>
                    )}
                </article>
            </main>
        </div>
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
