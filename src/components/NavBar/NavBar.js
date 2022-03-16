import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './navbar.css'
 const NavBar = () => {
    return(<>
        <nav className="desktop-nav">
            <div className="desktop-menu">
                <div className="desktop-menu__block">
                    <NavLink className="desktop-menu__link" to="/">Обо мне</NavLink>
                    <NavLink className="desktop-menu__link" to="/links">Полезные ссылки</NavLink>
                    <NavLink className="desktop-menu__link" to="/exams">Подготовка к экзаменам</NavLink>
                    <NavLink className="desktop-menu__link" to="/vpr">ВПР</NavLink>
                </div>
                <div className="desktop-menu__block">
                    <ThemeToggle />
                </div>
                <div className="desktop-menu__block">
                    <a className="desktop-menu__inst" href="https://www.instagram.com/anastasia.pro.geo/" target="_blank" rel="noreferrer"> </a>
                    <a className="desktop-menu__mail" href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer"> </a>
                </div>
            </div>
        </nav>
    </>)
}

export default NavBar