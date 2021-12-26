import type { Endpoints } from "@octokit/types"
import { Octokit } from "@octokit/core"
import type { AsyncReturnType } from "./async-return-type"

type UserResponse = Endpoints["GET /users/{username}"]["response"]

export type UserProp = keyof { [x: string]: UserResponse["data"] }

export async function getGithubUser(username: string) {
    const { request } = new Octokit()
    const response: UserResponse = await request("GET /users/{username}", {
        username,
    })

    if (response.status === 200) {
        return response.data
    }
}

export type ReturnedUser = AsyncReturnType<typeof getGithubUser>
