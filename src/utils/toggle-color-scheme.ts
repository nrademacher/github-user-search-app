export function toggleColorScheme(theme: "light" | "dark") {
    const root = window.document.documentElement

    if (theme === "dark") {
        root.classList.remove("light")
        root.classList.add("dark")
    } else {
        root.classList.remove("dark")
        root.classList.add("light")
    }
}
