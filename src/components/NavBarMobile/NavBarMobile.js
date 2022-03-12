import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './navbarmobile.css'

export const NavBarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const hide = () => {
        setIsOpen(false)
    }
    

    return(<>
    <header className="header-mobile">
        <ThemeToggle />
        <button
            className={
                isOpen ? 'menu-mobile-toggle open' : 'menu-mobile-toggle'
            }
            onClick={toggle}
        >
            <div className="menu-mobile-toggle__burger"></div>
        </button>
    </header>
        <nav className={isOpen ? 'mobile-nav nav-shown' : 'mobile-nav'}>
            <div className="menu-mobile-block">
                <NavLink className="menu-link" to="/" onClick={hide}>Обо мне</NavLink>
                <NavLink className="menu-link" to="/links" onClick={hide}>Полезные ссылки</NavLink>
                <NavLink className="menu-link" to="/exams" onClick={hide}>Подготовка к экзаменам</NavLink>
                <NavLink className="menu-link" to="/vpr" onClick={hide}>ВПР</NavLink>
            </div>
            <div className="menu-block">
                <a className="menu-inst" href="https://www.instagram.com/anastasia.pro.geo/" target="_blank" rel="noreferrer"> </a>
                <a className="menu-mail" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer"> </a>
            </div>
        </nav>
    </>)
}