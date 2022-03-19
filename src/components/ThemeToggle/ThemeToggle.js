import { useEffect, useState } from 'react'
import './themetoggle.css'

export const ThemeToggle = () => {
    const body = document.body

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') 
        ? localStorage.getItem('theme') 
        : 'light'
    )

    const themetoggle = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else {
            localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }

    useEffect(() => {
        body.classList = theme
    },[theme])


    return(<>
        <button
            onClick={themetoggle}
            className={`theme-toggle ${theme}`}
        >

        </button>
    </>)
}