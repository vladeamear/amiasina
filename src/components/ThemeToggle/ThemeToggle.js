import { useState } from 'react'
import './themetoggle.css'

export const ThemeToggle = () => {

    const body = document.body
    const themes = {
        light: 'light',
        dark: 'dark'
    }

    const [buttonTheme, setTheme] = useState(false)

    let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : themes.light
    body.classList.add(theme)

    const themetoggle = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', themes.dark)
            theme = themes.dark
        } else {
            localStorage.setItem('theme', themes.light)
            theme = themes.light
        }
        body.classList = ''
        body.classList.add(theme)
        setTheme(theme)
    }


    return(<>
        <button
            onClick={themetoggle}
            className={
                buttonTheme 
                ? `theme-toggle ${buttonTheme}` 
                : `theme-toggle ${theme}`
            }
        >

        </button>
    </>)
}