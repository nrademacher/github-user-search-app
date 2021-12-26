import type { ChangeEvent, FC, FormEvent, SetStateAction } from "react"
import { getGithubUser, ReturnedUser } from "@/utils"

interface IUserSearch {
    noResults: boolean
    userQuery: string
    setNoResults: (value: SetStateAction<boolean>) => void
    setUserQuery: (value: SetStateAction<string>) => void
    setUser: (value: SetStateAction<ReturnedUser>) => void
}

export const UserSearch: FC<IUserSearch> = ({ noResults, setNoResults, userQuery, setUserQuery, setUser }) => {
    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNoResults(false)
        setUserQuery(e.target.value)
    }

    const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const user = await getGithubUser(userQuery)
            setUser(user)
            setUserQuery("")
        } catch (error) {
            setNoResults(true)
        }
    }

    return (
        <form onSubmit={async (e) => await handleSearchSubmit(e)} className="relative w-full">
            <input
                className="w-full p-6 pl-12 mb-8 rounded shadow md:pl-20 text-h4 md:text-search text-ucla-blue dark:text-white dark:placeholder-white placeholder-opacity-85 dark:shadow-none dark:bg-medium-jungle-green"
                type="text"
                value={userQuery}
                onChange={handleSearchInput}
                placeholder="Search GitHub username..."
            />
            <img src="/assets/icon-search.svg" alt="Search icon" className="absolute top-6 left-4 md:left-8" />
            {noResults && (
                <span className="absolute text-h4 lg:text-base text-error top-[24%] right-[24%] lg:right-[18%]">
                    No results
                </span>
            )}
            <button
                type="submit"
                className="absolute py-3.5 text-white rounded-sm right-2.5 top-2.5 bg-pure-blue px-3.5 md:px-7  hover:bg-pure-blue-light"
            >
                Search
            </button>
        </form>
    )
}
