import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './navbarmobile.css'

const NavBarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const hide = () => {
        setIsOpen(false)
    }
    

    return(<>
    <header className="mobile__header">
        <ThemeToggle />
        <button
            className={
                isOpen ? 'mobile-menu__toggle open' : 'mobile-menu__toggle'
            }
            onClick={toggle}
        >
            <div className="mobile-menu__toggle__burger"></div>
        </button>
    </header>
        <nav className={isOpen ? 'mobile-nav shown' : 'mobile-nav'}>
            <div className="mobile-menu__block__column">
                <NavLink className="mobile-menu__link" to="/" onClick={hide}>Обо мне</NavLink>
                <NavLink className="mobile-menu__link" to="/links" onClick={hide}>Полезные ссылки</NavLink>
                <NavLink className="mobile-menu__link" to="/exams" onClick={hide}>Подготовка к экзаменам</NavLink>
                <NavLink className="mobile-menu__link" to="/vpr" onClick={hide}>ВПР</NavLink>
            </div>
            <div className="mobile-menu__block__row">
                <a className="mobile-menu__inst" href="https://www.instagram.com/anastasia.pro.geo/" target="_blank" rel="noreferrer"> </a>
                <a className="mobile-menu__mail" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer"> </a>
            </div>
        </nav>
    </>)
}

export default NavBarMobile