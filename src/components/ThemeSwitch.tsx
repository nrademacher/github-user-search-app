import type { FC, SetStateAction } from "react"
import { toggleColorScheme } from "@/utils"

interface IThemeSwitch {
    theme?: "dark" | "light"
    setTheme: (value: SetStateAction<"dark" | "light" | undefined>) => void
}

export const ThemeSwitch: FC<IThemeSwitch> = ({ theme, setTheme }) => {
    const switchTheme = () => {
        if (theme === "dark") {
            toggleColorScheme("light")
            setTheme("light")
        } else {
            toggleColorScheme("dark")
            setTheme("dark")
        }
    }

    return (
        <span onClick={switchTheme} className="flex items-center cursor-pointer hover:opacity-50">
            {theme === "light" ? (
                <>
                    <span className="mr-3">DARK</span>
                    <img src="/assets/icon-moon.svg" alt="Dark Mode" />
                </>
            ) : (
                <>
                    <span className="mr-3">LIGHT</span>
                    <img src="/assets/icon-sun.svg" alt="Light Mode" />
                </>
            )}
        </span>
    )
}
