import { useEffect, useState } from 'react'
import { RiSunFill, RiMoonFill } from "react-icons/ri"
import './themetoggle.css'

export const ThemeToggle = () => {
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
        document.body.classList = theme
    },[theme])


    return(
        <button
            onClick={themetoggle}
            className="theme-toggle"
        >
            { theme === 'light' ? <RiMoonFill className="icon" /> : <RiSunFill className="icon" />}
        </button>
    )
}