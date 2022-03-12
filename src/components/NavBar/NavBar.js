import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './navbar.css'

export const NavBar = () => {
    return(<>
        <nav className="desktop-nav">
            <div className="menu">
                <div className="menu-block">
                    <NavLink className="menu-link" to="/">Обо мне</NavLink>
                    <NavLink className="menu-link" to="/links">Полезные ссылки</NavLink>
                    <NavLink className="menu-link" to="/exams">Подготовка к экзаменам</NavLink>
                    <NavLink className="menu-link" to="/vpr">ВПР</NavLink>
                </div>
                <div className="menu-block">
                    <ThemeToggle />
                </div>
                <div className="menu-block">
                    <a className="menu-inst" href="https://www.instagram.com/anastasia.pro.geo/" target="_blank" rel="noreferrer"> </a>
                    <a className="menu-mail" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer"> </a>
                </div>
            </div>
        </nav>
    </>)
}