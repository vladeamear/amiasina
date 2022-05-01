import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { RiTelegramFill, RiMailFill } from 'react-icons/ri'
import './navbar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const hide = () => {
        setIsOpen(false)
    }

    return(
        <>
            <header className="header">
                <div className="menu">
                    <div className='menu__block desktop'>
                        <NavLink className="menu__link" exact to="/">Обо мне</NavLink>
                        <NavLink className="menu__link" to="/links">Полезные ссылки</NavLink>
                        <NavLink className="menu__link" to="/exams">Подготовка к экзаменам</NavLink>
                        <NavLink className="menu__link" to="/vpr">ВПР</NavLink>
                    </div>
                    <div className="menu__block">
                        <ThemeToggle />
                    </div>
                    <div className="menu__block desktop">
                        <a className="mobile-menu__network" href="https://t.me/anastasia_pro_geo" target="_blank" rel="noreferrer">
                            <RiTelegramFill className="icon" />
                        </a>
                        <a className="mobile-menu__network" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer">
                            <RiMailFill className="icon" />
                        </a>
                    </div>
                    <div className='menu__block mobile'>
                        <button
                            className={
                                isOpen 
                                ? 'menu__toggle open mobile' 
                                : 'menu__toggle mobile'
                            }
                            onClick={toggle}
                        >
                            <div className="menu__toggle__burger"></div>
                        </button>
                    </div>
                </div>
            </header>
            <nav 
                className={
                    isOpen 
                    ? 'mobile-nav shown mobile' 
                    : 'mobile-nav mobile'
                }
                onClick={toggle}
            >
                <div className="mobile-menu__block__column">
                    <NavLink className="mobile-menu__link" to="/" onClick={hide}>Обо мне</NavLink>
                    <NavLink className="mobile-menu__link" to="/links" onClick={hide}>Полезные ссылки</NavLink>
                    <NavLink className="mobile-menu__link" to="/exams" onClick={hide}>Подготовка к экзаменам</NavLink>
                    <NavLink className="mobile-menu__link" to="/vpr" onClick={hide}>ВПР</NavLink>
                </div>
                <div className="mobile-menu__block__row">
                    <a className="mobile-menu__network" href="https://t.me/anastasia_pro_geo" target="_blank" rel="noreferrer">
                        <RiTelegramFill className="icon" />
                    </a>
                    <a className="mobile-menu__network" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer">
                        <RiMailFill className="icon" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar