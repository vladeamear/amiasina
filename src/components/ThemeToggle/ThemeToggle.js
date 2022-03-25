import { useEffect, useState } from 'react'
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs"
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
            { theme === 'light' ? <BsMoonStarsFill className="theme-toggle__icon" /> : <BsFillSunFill className="theme-toggle__icon" />}
        </button>
    )
}