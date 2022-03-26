import { RiTelegramFill, RiMailFill } from 'react-icons/ri'
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-block">
                <p>Пер&shy;со&shy;наль&shy;ный сайт учи&shy;те&shy;ля гео&shy;гра&shy;фии Мясиной Анастасии Александровны</p>
                <p>Школа №79</p>
            </div>
            <div className="footer-block footer-links">
                <p>
                    <a href="https://t.me/anastasia_pro_geo" target="_blank" rel="noreferrer" className="footer__link">
                        <RiTelegramFill className="icon" /> @anastasia_pro_geo
                    </a>
                </p>
                <p>
                    <a href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer" className="footer__link">
                        <RiMailFill className="icon" /> anastasia.miasina@ya.ru
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer