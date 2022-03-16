import './footer.css'

const Footer = () => {
    return(<>
    <footer>
        <div className="footer-block">
            <p>Персональный сайт учителя географии<br />Мясиной Анастасии Александровны</p>
            <p>Школа №79</p>
        </div>
        <div className="footer-block footer-links">
            <p><a href="https://www.instagram.com/anastasia.pro.geo/" target="_blank" rel="noreferrer" className="contact inst">@anastasia.pro.geo</a></p>
            <p><a href="mailto:anastasia.miasina@ya.ru" target="_blank" rel="noreferrer" className="contact mail">anastasia.miasina@ya.ru</a></p>
        </div>
    </footer>
    </>)
}

export default Footer