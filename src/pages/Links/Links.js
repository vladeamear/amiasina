import LinkComponent from "../../components/LinkComponent/LinkComponent"

export const Links = () => {
    return(<>
    <section id="links">
        <div className="screen card">
            <h1>Полезные ссылки</h1>
            <p>На этой странице можно найти полезные ссылки, которые помогут Вам углубить знания по некоторым темам или узнать что-то новое.</p>
            <LinkComponent name="Google Планета Земля" link="https://www.google.ru/intl/ru/earth/" />
            <LinkComponent name="Географический справочник" link="http://www.geo.historic.ru/" />
            <LinkComponent name="Geogsite - Все о географии" link="http://www.geogsite.com/" />
            <LinkComponent name="Seterra - Географические онлайн игры" link="https://online.seterra.com/ru" />
            <LinkComponent name="Карта мира со странами и столицами на русском языке" link="http://bigkarta.ru/" />
            <LinkComponent name="Рельеф" link="http://www.geo-site.ru/index.php/2011-01-10-19-57-27/81-2011-01-10-19-45-07.html" />
            <LinkComponent name="Словарь географических названий" link="https://gufo.me/dict/geographical_names" />
            <LinkComponent name="Контурные карты по географии" link="http://kontur-map.ru/" />
        </div>
    </section>
    </>)
}